// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/pages/ProfilePageRender/Display/Display.stories';

const { Default } = composeStories(stories);

describe('Display unit tests', () => {
  it('Should render the Display component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('display-content')).toBeInTheDocument();
  });
});
