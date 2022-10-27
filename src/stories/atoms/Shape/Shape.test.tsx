// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/Shape/Shape.stories';
import { defaultTheme } from 'themes'

beforeAll(() => {});
afterEach(() => {});
afterAll(() => {});

const { Default, Rectangle, Color } = composeStories(stories);

describe('Default Shape unit test', () => {
  it('Should render the Default Shape component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('shape-test')).toHaveStyle(`
      background-color: ${defaultTheme.primaryGray};
      width: 10rem;
    `);
  });
});

describe('Rectangle Shape unit test', () => {
  it('Should render the Rectangle Shape component', () => {
    const { getByTestId } = render(<Rectangle />);
    expect(getByTestId('shape-test')).toHaveStyle('width: 20rem')
  });
});

describe('Color Shape unit test', () => {
  it('Should render the Color Shape component', () => {
    const { getByTestId } = render(<Color />);
    expect(getByTestId('shape-test')).toHaveStyle(`background-color: ${defaultTheme.brightGreen}`)
  });
});






