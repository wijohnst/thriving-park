import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OptionList } from 'stories/Inputs/Select/OptionList/OptionList';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Molecules/OptionList',
  component: OptionList,
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
} as ComponentMeta<typeof OptionList>;

const defaultOptions = [
  {
    key: 1,
    label: 'Option 1',
    value: 1,
  },
  {
    key: 2,
    label: 'Option 2',
    value: 2,
  },
  {
    key: 3,
    label: 'Option 3',
    value: 3,
  },
];

const Template: ComponentStory<typeof OptionList> = (args) => (
  <OptionList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: defaultOptions,
};
