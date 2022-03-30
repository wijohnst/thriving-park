// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/Shape/Shape.stories';

const { Default, Rectangle, Color } = composeStories(stories);

describe('Shape unit tests', () => {
  it('Should render the Default Shape component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('shape-component-default')).toBeInTheDocument();
  });

  it('Should render the Rectangle Shape component', () => {
    const { getByTestId } = render(<Rectangle />);
    expect(getByTestId('shape-component-rectangle')).toBeInTheDocument();
  });

  it('Should render the Color Shape component', () => {
    const { getByTestId } = render(<Color />);
    expect(getByTestId('shape-component-color')).toBeInTheDocument();
  });
});
