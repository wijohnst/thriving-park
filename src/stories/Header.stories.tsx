import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from 'stories/Header';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';
import { SizesEnum } from 'utils/sharedTypes';

export default {
  title: 'Design System/Atoms/Header',
  component: Header,
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
  argTypes: {
    color: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Header',
  color: '#FFFFFF',
};

export const RegularCasing = Template.bind({});
RegularCasing.args = {
  ...Primary.args,
  shouldAllCaps: false,
};

export const Subheading = Template.bind({});
Subheading.args = {
  ...Primary.args,
  hasSubheading: true,
  subheadingText: 'Subheading',
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: SizesEnum.Large,
};

export const Medium = Template.bind({});
Medium.args = {
  ...Primary.args,
  size: SizesEnum.Medium,
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  size: SizesEnum.Small,
};
