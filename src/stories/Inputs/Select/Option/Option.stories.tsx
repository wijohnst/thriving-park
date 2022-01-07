import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Option } from 'stories/Inputs/Select/Option/Option';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/Option',
  component: Option,
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
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = (args) => <Option {...args} />;

export const Default = Template.bind({});
Default.args = {
  option: {
    key: 1,
    label: 'Option 1',
    value: 1,
  },
};
