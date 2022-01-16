// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/CTALink/CTALink.stories';

const { Default } = composeStories(stories);

describe('CTALink unit tests', () => {
  it('Should render the CTALink component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('Call-to-Action Link')).toBeInTheDocument();
  });
});
