// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/molecules/forms/EditProfileForm/EditProfileForm.stories';

const { Default } = composeStories(stories);

describe('EditProfileForm unit tests', () => {
  it('Should render the EditProfileForm component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('EditProfileForm Works!')).toBeInTheDocument();
  });
});
