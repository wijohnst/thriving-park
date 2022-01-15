// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { ProfilePageRender } from 'stories/pages/ProfilePageRender/ProfilePageRender';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

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
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const Edit = Template.bind({});
Edit.args = {
  ...Default.args,
  isEdit: true,
};
