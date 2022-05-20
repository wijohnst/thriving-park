import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GrafHeader } from 'stories/molecules/GrafHeader/GrafHeader';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

import { screenSizes } from 'utils/constants';

export default {
  title: 'Design System/Molecules/GrafHeader',
  component: GrafHeader,
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
  argTypes: {},
} as ComponentMeta<typeof GrafHeader>;

const Template: ComponentStory<typeof GrafHeader> = (args) => (
  <GrafHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  screenSize: screenSizes.Desktop,
};

export const Mobile = Template.bind({});
Mobile.args = {
  screenSize: screenSizes.Mobile,
};
