import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { NavBar } from 'stories/molecules/NavBar/NavBar';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';
import * as AppLinkStories from 'stories/atoms/AppLink/AppLink.stories';

export default {
  title: 'Design System/Molecules/NavBar',
  component: NavBar,
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
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  appLinks: [
    // @ts-ignore
    {
      ...AppLinkStories.Default.args?.appLink,
      linkText: 'Profile',
      isActive: true,
    },
    // @ts-ignore
    {
      ...AppLinkStories.Default.args?.appLink,
      linkText: 'Community',
      isActive: false,
    },
    // @ts-ignore
    {
      ...AppLinkStories.Default.args?.appLink,
      linkText: 'Info',
      isActive: false,
    },
  ],
};
