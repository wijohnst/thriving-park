// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/Shape/Shape.stories';

beforeAll(() => {});
afterEach(() => {});
afterAll(() => {});


const { Default } = composeStories(stories);

describe('Shape unit test', () => {
  it('Should render the Shape component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('shape-test')).toBeInTheDocument();
  })
});






