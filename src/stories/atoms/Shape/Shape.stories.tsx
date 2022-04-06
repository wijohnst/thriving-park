// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { Shape } from 'stories/atoms/Shape/Shape';
import { defaultTheme } from 'themes';
import { ShapeEnum, ColorEnum } from 'utils/sharedTypes';

export default {
  title: 'Design System/Atoms/Shape',
  component: Shape,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: defaultTheme.primaryGray,
          width: '100px',
          height: '100px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Shape>;

const Template: ComponentStory<typeof Shape> = (args) => <Shape {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...Default.args
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  ...Default.args,
  shape: ShapeEnum.RECTANGLE,
};

export const Color = Template.bind({});
Color.args = {
  ...Default.args,
  color: ColorEnum.GREEN,
};
