// Global Imports
import React from 'react';
import { screen } from '@testing-library/react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/Shape/Shape.stories';
import { composeStories } from '@storybook/testing-react';

const { Default, Rectangle, Color } = composeStories(stories);

describe('Shape Component Unit Test', () => {
  it('Should render the default Shape component', () => {
    render(<Default />);
    const shapeComponent = screen.getByTestId('shape-component');
    expect(shapeComponent).toBeInTheDocument();
  });

  it('Should render the default Shape component as a rectangle', () => {
    render(<Rectangle />);
    expect(screen.getByTestId('shape-component')).toBeInTheDocument();
  });

  it('Should render the default Shape component with a defined color', () => {
    render(<Color />);
    expect(screen.getByTestId('shape-component')).toBeInTheDocument();
  });
});
