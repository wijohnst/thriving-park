// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { ProfileHeader } from 'stories/molecules/ProfileHeader/ProfileHeader';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Molecules/ProfileHeader',
  component: ProfileHeader,
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
} as ComponentMeta<typeof ProfileHeader>;

const Template: ComponentStory<typeof ProfileHeader> = (args) => (
  <ProfileHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userInfo: {
    userName: 'Joe Byron',
    neighborType: undefined,
    neighborDate: undefined,
    userBlurb: undefined,
  },
  // eslint-disable-next-line no-console
  onClick: () => console.log('Handle Edit click...'),
};

export const WithPicture = Template.bind({});
WithPicture.args = {
  ...Default.args,
  profilePictureURL:
    'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
};

export const CompleteUserData = Template.bind({});
CompleteUserData.args = {
  ...WithPicture.args,
  userInfo: {
    userName: 'Joe Byron',
    neighborType: 'Resident',
    neighborDate: new Date('06/18/2019'),
    userBlurb: undefined,
  },
};

export const Edit = Template.bind({});
Edit.args = {
  ...CompleteUserData.args,
  ...WithPicture.args,
  isEdit: true,
  // eslint-disable-next-line no-console
  onClick: () => console.log('Handle Add Picture click...'),
};

export const PhotoUpload = Template.bind({});
PhotoUpload.args = {
  ...CompleteUserData.args,
  ...Edit.args,
  isPhotoUpload: true,
  onClick: () => console.log('Handle Cancel Action click...'),
};
