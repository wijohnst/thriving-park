// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/GrafHeader.stories';

const { Primary, Mobile } = composeStories(stories);

describe('GrafLabel component unit tests', () => {
  it('Should render the Primary label', () => {
    const { getByText } = render(<Primary />);
    expect(getByText('DRIVING PARK')).toBeInTheDocument();
    expect(getByText('Thriving')).toBeInTheDocument();
    expect(getByText('ALWAYS ON THE MOVE')).toBeInTheDocument();
  });

  it('Should render the Mobile component', () => {
    const { getByText, queryByText } = render(<Mobile />);
    expect(getByText('THRIVING PARK')).toBeInTheDocument();
    expect(queryByText('ALWAYS ON THE MOVE')).not.toBeInTheDocument();
  });
});
