// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/Inputs/Submit/Submit.stories';

const { Default } = composeStories(stories);

describe('Submit unit tests', () => {
  it('Should render the Submit component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('submit-input')).toBeInTheDocument();
  });
});
