import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CaretIcon } from 'stories/molecules/CaretIcon/CaretIcon';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Molecules/CaretIcon',
  component: CaretIcon,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: defaultTheme.secondaryBlue,
          ...standardWrapper,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CaretIcon>;

const Template: ComponentStory<typeof CaretIcon> = (args) => (
  <CaretIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Up = Template.bind({});
Up.args = {
  ...Default.args,
  orientation: 'Up',
};

export const Down = Template.bind({});
Down.args = {
  ...Default.args,
  orientation: 'Down',
};
