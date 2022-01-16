// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/molecules/ProfileHeader/ProfileHeader.stories';

const { Default, CompleteUserData } = composeStories(stories);

describe('ProfileHeader unit tests', () => {
  it('Should render the ProfileHeader component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('profile-picture')).toBeInTheDocument();
  });

  it('Should render the CompleteUserData', () => {
    const { getByText } = render(<CompleteUserData />);
    expect(getByText('Resident since 2019.')).toBeInTheDocument();
  });
});
