// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { ErrorMessage } from 'stories/atoms/ErrorMessage/ErrorMessage';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/ErrorMessage',
  component: ErrorMessage,
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
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: 'Error',
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  message: 'Warning',
  isWarning: true,
};
