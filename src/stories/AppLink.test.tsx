// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/AppLink.stories';

const { Default } = composeStories(stories);

describe('AppLink component unit tests', () => {
  it('Should render the default AppLink', () => {
    const { getByText } = render(<Default />);
    expect(getByText('HOME')).toBeInTheDocument();
  });
});
