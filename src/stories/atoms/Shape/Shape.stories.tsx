// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { Shape } from 'stories/atoms/Shape/Shape';

export default {
  title: 'Design System/Atoms/Shape',
  component: Shape,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#C4C4C4',
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
  color: '#C4C4C4',
  shape: 'square',
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  ...Default.args,
  shape: 'rectangle',
};

export const Color = Template.bind({});
Color.args = {
  ...Default.args,
  color: '#8EFF01',
};
