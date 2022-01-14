// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/pages/ProfilePageRender/Display/Display.stories';

const { Default } = composeStories(stories);

describe('Display unit tests', () => {
  it('Should render the Display component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('Display Works!')).toBeInTheDocument();
  });
});
