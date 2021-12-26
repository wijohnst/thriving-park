import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'stories/Button';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'PRIMARY BUTTON',
  isMobile: false,
};

export const MobilePrimary = Template.bind({});
MobilePrimary.args = {
  label: 'MOBILE PRIMARY',
  isMobile: true,
};
