// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/pages/ProfilePage/ProfilePageRender/ProfilePageRender.stories';
import { mockUserBlurb } from 'mocks/sharedMocks';

const { Default, Loading, IncompleteUserInfo, Edit, UploadPhoto } =
  composeStories(stories);

describe('ProfilePageRender unit tests', () => {
  it('Should render the Default ProfilePageRender component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('Joe Byron')).toBeInTheDocument();
    expect(getByText('Resident since 2018.')).toBeInTheDocument();
    expect(getByText(mockUserBlurb)).toBeInTheDocument();
  });

  it('Should render the Loading spinner', () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('Should render the update profile CTA', () => {
    const { getByText } = render(<IncompleteUserInfo />);
    expect(getByText('Finish setting up your profile +')).toBeInTheDocument();
  });

  it('Should render the Edit Profile form', () => {
    const { getByTestId, getByText } = render(<Edit />);
    expect(getByTestId('editpic-wrapper')).toBeInTheDocument();
    expect(getByText('First Name')).toBeInTheDocument();
    expect(getByText('Last Name')).toBeInTheDocument();
  });

  it('Should render the Upload Photo story', () => {
    const { getByTestId } = render(<UploadPhoto />);
    expect(getByTestId('edit-profile-pic-input')).toBeInTheDocument();
  });
});
