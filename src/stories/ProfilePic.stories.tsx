import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfilePic } from 'stories/ProfilePic';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

import { SizesEnum } from 'utils/sharedTypes';

export default {
  title: 'Design System/Atoms/ProfilePic',
  component: ProfilePic,
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
} as ComponentMeta<typeof ProfilePic>;

const Template: ComponentStory<typeof ProfilePic> = (args) => (
  <ProfilePic {...args} />
);

export const Default = Template.bind({});
Default.args = {
  profilePictureURL:
    'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: SizesEnum.Small,
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  size: SizesEnum.Medium,
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: SizesEnum.Large,
};

export const NoImage = Template.bind({});
NoImage.args = {
  size: SizesEnum.Medium,
};
