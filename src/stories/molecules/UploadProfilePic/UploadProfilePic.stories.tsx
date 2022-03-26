// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { UploadProfilePic } from 'stories/molecules/UploadProfilePic/UploadProfilePic';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Molecules/UploadProfilePic',
  component: UploadProfilePic,
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
} as ComponentMeta<typeof UploadProfilePic>;

const Template: ComponentStory<typeof UploadProfilePic> = (args) => (
  <UploadProfilePic {...args} />
);

export const Default = Template.bind({});
Default.args = {};
