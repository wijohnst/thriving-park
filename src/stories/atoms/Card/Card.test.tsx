// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/Card/Card.stories';

const { Default } = composeStories(stories);

describe('Card unit tests', () => {
  it('Should render the Card component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('Card Works!')).toBeInTheDocument();
  });
});
