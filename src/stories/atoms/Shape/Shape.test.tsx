// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/Shape/Shape.stories';

const { Default, Rectangle } = composeStories(stories);

describe('Shape unit tests', () => {
  it('Should render the square Shape component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('shape-component-square')).toBeInTheDocument();
  });

  it('Should render the rectangle Shape component', () => {
    const { getByTestId } = render(<Rectangle />);
    expect(getByTestId('shape-component-rectangle')).toBeInTheDocument();
  });
});
