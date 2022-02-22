import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OptionList } from 'stories/Inputs/Select/OptionList/OptionList';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';
import { defaultOptions } from 'utils/constants';

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

const Template: ComponentStory<typeof OptionList> = (args) => (
  <OptionList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: defaultOptions,
};
