// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/pages/ProfilePage/ProfilePageRender/Edit/Edit.stories';

const { Default } = composeStories(stories);

describe('Edit unit tests', () => {
  it('Should render the Edit component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('First Name')).toBeInTheDocument();
    expect(getByText('Last Name')).toBeInTheDocument();
  });
});
