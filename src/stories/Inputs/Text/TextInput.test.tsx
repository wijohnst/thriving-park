// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/Inputs/Text/TextInput.stories';

beforeAll(() => {});
afterEach(() => {});
afterAll(() => {});

const { Default } = composeStories(stories);

describe('TextInput component unit tests', () => {
  it('Should render the TextInput component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('textinput')).toBeInTheDocument();
  });
});
