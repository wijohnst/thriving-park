// Global Imports
import React from 'react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/Shape/Shape.stories';
import { composeStories } from '@storybook/testing-react';

const { Default, Rectangle, Color } = composeStories(stories);

describe('Shape Component Unit Test', () => {
  it('Should render the default Shape component', () => {
    const { getByTestId } = render(<Default />);
  });

  it('Should render the default Shape component as a rectangle', () => {});

  it('Should render the default Shape component with a defined color', () => {});
});
