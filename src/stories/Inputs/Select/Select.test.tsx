// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/Inputs/Select/Select.stories';

const { Default } = composeStories(stories);

describe('Select component unit test', () => {
  it('Should render the default Select component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('Please select an option')).toBeInTheDocument();
  });

  it('Should render the options list when clicked', () => {
    const { getByText } = render(<Default />);
    userEvent.click(getByText('Please select an option'));
    expect(getByText('Option 1')).toBeInTheDocument();
  });

  it('Should render the options list when Caret Icon is clicked', () => {
    const { getByText, getByTestId } = render(<Default />);
    userEvent.click(getByTestId('caret-icon'));
    expect(getByText('Option 1')).toBeInTheDocument();
  });
});
