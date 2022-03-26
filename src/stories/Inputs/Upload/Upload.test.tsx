// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/Inputs/Upload/Upload.stories';

const { Default } = composeStories(stories);

describe('Upload unit tests', () => {
  it('Should render the Upload component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('file-input')).toBeInTheDocument();
  });

  it('Should be equal to the file that is selected', () => {
    const testFile = new File(['Test File'], 'testFile.pdf', {
      type: 'application/pdf',
    });
    const { getByTestId } = render(<Default />);
    const fileInput = getByTestId('file-input') as HTMLFormElement;
    userEvent.upload(fileInput, testFile);
    expect(fileInput.files[0]).toStrictEqual(testFile);
    expect(fileInput.files).toHaveLength(1);
  });
});
