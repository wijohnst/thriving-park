import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SvgIcon from 'stories/svgIcon';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';
import { ReactComponent as Logo } from 'stories/assets/thriving_park_logo.svg';

export default {
  title: 'Design System/Molecules/SvgIcon',
  component: SvgIcon,
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
  argTypes: {
    height: {
      control: {
        type: 'range',
        min: 20,
        max: 1000,
        step: 20,
      },
    },
    width: {
      control: {
        type: 'range',
        min: 20,
        max: 1000,
        step: 20,
      },
    },
  },
} as ComponentMeta<typeof SvgIcon>;

const Template: ComponentStory<typeof SvgIcon> = (args) => (
  <SvgIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // @ts-ignore
  Icon: Logo,
};

export const Constrained = Template.bind({});
Constrained.args = {
  ...Default.args,
  height: 50,
  width: 50,
};
