// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { AuthCTA } from 'stories/molecules/AuthCTA/AuthCTA';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Molecules/AuthCTA',
  component: AuthCTA,
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
} as ComponentMeta<typeof AuthCTA>;

const Template: ComponentStory<typeof AuthCTA> = (args) => (
  <AuthCTA {...args} />
);

export const SignIn = Template.bind({});
SignIn.args = {
  isAuthorized: false,
};

export const SignOut = Template.bind({});
SignOut.args = {
  isAuthorized: true,
};
