import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from 'stories/Input';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Molecules/Input',
  component: Input,
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Text = Template.bind({});
Text.args = {
  ...Default.args,
  inputType: 'Text',
};

export const Select = Template.bind({});
Select.args = {
  ...Default.args,
  inputType: 'Select',
};
