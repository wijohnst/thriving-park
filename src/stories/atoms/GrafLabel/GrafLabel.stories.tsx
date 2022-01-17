import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GrafLabel } from 'stories/atoms/GrafLabel/GrafLabel';
import { defaultTheme } from 'themes';
import {
  standardWrapper,
  diagonalPatternBackground,
} from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/GrafLabel',
  component: GrafLabel,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: defaultTheme.primaryBlue,
          ...standardWrapper,
          ...diagonalPatternBackground,
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    rotation: {
      control: {
        type: 'range',
        min: -365,
        max: 365,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof GrafLabel>;

const Template: ComponentStory<typeof GrafLabel> = (args) => (
  <GrafLabel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Graf Label',
};

export const Rotated = Template.bind({});
Rotated.args = {
  ...Primary.args,
  rotation: -10,
};
