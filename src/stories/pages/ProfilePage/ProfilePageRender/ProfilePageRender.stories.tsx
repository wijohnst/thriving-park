// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { ProfilePageRender } from 'stories/pages/ProfilePage/ProfilePageRender/ProfilePageRender';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';
import { mockProfilePictureURL, mockUserBlurb } from 'mocks/sharedMocks';

export default {
  title: 'Design System/Pages/ProfilePageRender',
  component: ProfilePageRender,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: defaultTheme.primaryBlue,
          ...standardWrapper,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProfilePageRender>;

const Template: ComponentStory<typeof ProfilePageRender> = (args) => (
  <ProfilePageRender {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  userInfo: {
    userName: 'Joe Byron',
    neighborType: 'Resident',
    neighborDate: new Date('10/24/2018'),
    userBlurb: mockUserBlurb,
  },
  // eslint-disable-next-line no-console
  onEditClick: () => console.log('Handle Edit click....'),
};

export const IncompleteUserInfo = Template.bind({});
IncompleteUserInfo.args = {
  ...Default.args,
  userInfo: {
    userName: 'Joe Byron',
    neighborType: undefined,
    neighborDate: undefined,
    userBlurb: undefined,
  },
};

export const WithPicture = Template.bind({});
WithPicture.args = {
  ...Default.args,
  profilePictureURL: mockProfilePictureURL,
};

export const Edit = Template.bind({});
Edit.args = {
  ...Default.args,
  ...WithPicture.args,
  isEdit: true,
  // eslint-disable-next-line no-console
  onEditClick: () => console.log('Handle Add Picture click...'),
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const UploadPhoto = Template.bind({});
UploadPhoto.args = {
  ...Edit.args,
  isPhotoUpload: true,
};
