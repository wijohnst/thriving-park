// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/molecules/Loading/Loading.stories';

const { Default } = composeStories(stories);

describe('Loading unit tests', () => {
  it('Should render the Loading component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
