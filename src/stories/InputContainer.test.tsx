// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/InputContainer.stories';

const { Default } = composeStories(stories);

describe('InputContainer unit tests', () => {
  it('Should render the InputContainer component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('Label')).toBeInTheDocument();
  });
});
