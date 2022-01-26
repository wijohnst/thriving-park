// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/Inputs/Upload/Upload.stories';

const { Default } = composeStories(stories);

describe('Upload unit tests', () => {
  it('Should render the Upload component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('Upload Works!')).toBeInTheDocument();
  });
});
