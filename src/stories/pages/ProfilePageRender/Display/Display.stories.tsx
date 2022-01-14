// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { Display } from 'stories/pages/ProfilePageRender/Display/Display';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Pages/ProfilePageRender/Display',
  component: Display,
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
} as ComponentMeta<typeof Display>;

const Template: ComponentStory<typeof Display> = (args) => (
  <Display {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userName: 'Will Johnston',
  // eslint-disable-next-line no-console
  onClick: () => console.log('Handle edit click'),
};

export const WithPicture = Template.bind({});
WithPicture.args = {
  ...Default.args,
  profilePictureURL:
    'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
};
