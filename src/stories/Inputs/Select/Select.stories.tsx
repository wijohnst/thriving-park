import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from 'stories/Inputs/Select/Select';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/Inputs/Select',
  component: Select,
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
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  ...Default.args,
  placeholder: 'Custom Placeholder',
};

export const WithPassedOptions = Template.bind({});
WithPassedOptions.args = {
  ...Default.args,
  options: [
    {
      key: 1,
      label: 'Custom Option 1',
      value: 1,
    },
    {
      key: 2,
      label: 'Custom Option 2',
      value: 2,
    },
  ],
};
