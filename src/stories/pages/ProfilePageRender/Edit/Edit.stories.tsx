// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { Edit } from 'stories/pages/ProfilePageRender/Edit/Edit';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Pages/ProfilePageRender/Edit',
  component: Edit,
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
} as ComponentMeta<typeof Edit>;

const Template: ComponentStory<typeof Edit> = (args) => <Edit {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const IsSubmitting = Template.bind({});
IsSubmitting.args = {
  ...Default.args,
  isLoading: true,
};

export const IsSubmitted = Template.bind({});
IsSubmitted.args = {
  ...Default.args,
  isSubmitted: true,
};
