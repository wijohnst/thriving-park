// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { TextArea } from 'stories/Inputs/TextArea/TextArea';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/Inputs/TextArea',
  component: TextArea,
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
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isActive: false,
};

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

export const MaxCharacterLength = Template.bind({});
MaxCharacterLength.args = {
  ...Default.args,
  maxChararacterLength: 10,
};
