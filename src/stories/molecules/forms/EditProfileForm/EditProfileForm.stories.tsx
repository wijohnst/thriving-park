// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { EditProfileForm } from 'stories/molecules/forms/EditProfileForm/EditProfileForm';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Molecules/forms/EditProfileForm',
  component: EditProfileForm,
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
} as ComponentMeta<typeof EditProfileForm>;

const Template: ComponentStory<typeof EditProfileForm> = (args) => (
  <EditProfileForm {...args} />
);

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
