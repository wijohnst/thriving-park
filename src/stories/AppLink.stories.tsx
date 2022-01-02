import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppLink } from 'stories/AppLink';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/AppLink',
  component: AppLink,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: defaultTheme.primaryBlue,
          ...standardWrapper,
        }}
      >
        <Router>
          <Story />
        </Router>
      </div>
    ),
  ],
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  appLink: {
    linkPath: '/',
    linkText: 'Home',
    isActive: false,
  },
};

export const Active = Template.bind({});
Active.args = {
  // @ts-ignore - Partial type not recognized by Storybook
  appLink: {
    ...Default.args.appLink,
    isActive: true,
  },
};
