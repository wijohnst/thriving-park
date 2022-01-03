// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/Input.stories';

beforeAll(() => {});
afterEach(() => {});
afterAll(() => {});

const { Default } = composeStories(stories);

describe('Input component unit tests', () => {
  it('Should render the Input component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('textinput')).toBeInTheDocument();
  });
});
