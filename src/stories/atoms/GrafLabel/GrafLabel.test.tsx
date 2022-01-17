// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/GrafLabel/GrafLabel.stories';

const { Primary } = composeStories(stories);

describe('GrafLabel component unit tests', () => {
  it('Should render the Primary label', () => {
    const { getByText } = render(<Primary />);
    expect(getByText('Graf Label')).toBeInTheDocument();
  });
});
