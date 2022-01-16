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
