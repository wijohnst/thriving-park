import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GrafHeader } from 'stories/GrafHeader';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Molecules/GrafHeader',
  component: GrafHeader,
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
  argTypes: {},
} as ComponentMeta<typeof GrafHeader>;

const Template: ComponentStory<typeof GrafHeader> = (args) => (
  <GrafHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isMobile: false,
};

export const Mobile = Template.bind({});
Mobile.args = {
  isMobile: true,
};
