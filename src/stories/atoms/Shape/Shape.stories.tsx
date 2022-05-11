import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Shape } from 'stories/atoms/Shape/Shape';
import { defaultTheme } from 'themes';

export default {
  title: 'Design System/Atoms/Shape',
  component: Shape,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '0px',
          backgroundColor: defaultTheme.primaryBlue,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof Shape>;

const Template: ComponentStory<typeof Shape> = (args) => <Shape {...args} />;

// Not sure if it is the right way to hard code the default color here.
export const Default = Template.bind({});
Default.args = {
  height: 100,
  defaultColor: `#c4c4c4`,
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  ...Default.args,
  isRectangle: true,
};

export const Color = Template.bind({});
Color.args = {
  ...Default.args,
  hasColor: true,
  color: `#8eff00`,
};
