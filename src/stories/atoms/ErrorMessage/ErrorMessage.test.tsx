// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/ErrorMessage/ErrorMessage.stories';

const { Default } = composeStories(stories);

describe('ErrorMessage unit tests', () => {
  it('Should render the ErrorMessage component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('ErrorMessage Works!')).toBeInTheDocument();
  });
});
