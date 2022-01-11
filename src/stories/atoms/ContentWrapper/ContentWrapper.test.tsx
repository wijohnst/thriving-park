// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/ContentWrapper/ContentWrapper.stories';

const { Default } = composeStories(stories);

describe('ContentWrapper unit tests', () => {
  it('Should render the ContentWrapper component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('content-wrapper')).toBeInTheDocument();
  });
});
