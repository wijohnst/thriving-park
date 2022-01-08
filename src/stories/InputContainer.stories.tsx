// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { InputContainer } from 'stories/InputContainer';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/ Molecules/InputContainer',
  component: InputContainer,
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
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = (args) => (
  <InputContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  inputType: 'Text',
};
