// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/Icon/Icon.stories';

const { Default, Caret } = composeStories(stories);

describe('Icon unit tests', () => {
  it('Should render the Icon component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('default-icon')).toBeInTheDocument();
  });

  it('Should render a Caret icon', () => {
    const { getByTestId } = render(<Caret />);
    expect(getByTestId('caret-icon')).toBeInTheDocument();
  });
});
