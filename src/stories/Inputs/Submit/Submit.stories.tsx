// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { Submit } from 'stories/Inputs/Submit/Submit';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/Inputs/Submit',
  component: Submit,
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
} as ComponentMeta<typeof Submit>;

const Template: ComponentStory<typeof Submit> = (args) => <Submit {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const IsLoading = Template.bind({});
IsLoading.args = {
  ...Default.args,
  isLoading: true,
};

export const IsSubmitted = Template.bind({});
IsSubmitted.args = {
  ...Default.args,
  isSubmitted: true,
};
