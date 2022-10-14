import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Shape } from 'stories/atoms/Shape/Shape';

export default {
  title: 'Design System/Atoms/Shape',
  component: Shape,
} as ComponentMeta<typeof Shape>;

const Template: ComponentStory<typeof Shape> = (args) => <Shape {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#c4c4c3',
  shapeHeight: '250',
  shapeWidth: '250',
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  ...Default.args,
  shapeWidth: '500',
};

export const Color = Template.bind({});
Color.args = {
  ...Default.args,
  backgroundColor: '#8eff00',
};
