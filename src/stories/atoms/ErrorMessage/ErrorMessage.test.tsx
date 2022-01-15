// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/ErrorMessage/ErrorMessage.stories';

const { Default, Warning } = composeStories(stories);

describe('ErrorMessage unit tests', () => {
  it('Should render the ErrorMessage component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('error-message')).toBeInTheDocument();
  });

  it('Should render the ErrorMessage component as a warning', () => {
    const { getByTestId } = render(<Warning />);
    expect(getByTestId('warning-message')).toBeInTheDocument();
  });
});
