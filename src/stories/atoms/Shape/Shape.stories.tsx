// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { Shape } from 'stories/atoms/Shape/Shape';
import { defaultTheme } from 'themes';

export default {
  title: 'Design System/Atoms/Shape',
  component: Shape,
} as ComponentMeta<typeof Shape>;

const Template: ComponentStory<typeof Shape> = (args) => <Shape {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: defaultTheme.primaryGray,
  shapeHeight: '10rem',
  shapeWidth: '10rem',
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  ...Default.args,
  shapeWidth: '20rem',
};

export const Color = Template.bind({});
Color.args = {
  ...Default.args,
  backgroundColor: defaultTheme.brightGreen,
};
