// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/pages/ProfilePageRender/ProfilePageRender.stories';

const { Default, Loading } = composeStories(stories);

describe('ProfilePageRender unit tests', () => {
  it('Should render the ProfilePageRender component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('ProfilePageRender Works!')).toBeInTheDocument();
  });

  it('Should render the Loading spinner', () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
