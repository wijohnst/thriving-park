import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from 'stories/Label';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/Label',
  component: Label,
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
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Label',
  displayStyle: 'flexLeft',
};

export const CenterLabel = Template.bind({});
CenterLabel.args = {
  ...Primary.args,
  displayStyle: 'flexCenter',
};

export const RightLabel = Template.bind({});
RightLabel.args = {
  ...Primary.args,
  displayStyle: 'flexRight',
};

export const Underlined = Template.bind({});
Underlined.args = {
  ...Primary.args,
  isUnderlined: true,
};

export const Light = Template.bind({});
Light.args = {
  ...Primary.args,
  textStyle: 'light',
};
