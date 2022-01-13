// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/molecules/IconLabel/IconLabel.stories';

const { Default } = composeStories(stories);

describe('IconLabel unit tests', () => {
  it('Should render the IconLabel component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('Label')).toBeInTheDocument();
  });
});
