import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from 'stories/Inputs/Text/TextInput';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/Inputs/TextInput',
  component: TextInput,
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
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isActive: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...Default.args,
  placeholder: 'Placeholder...',
};
