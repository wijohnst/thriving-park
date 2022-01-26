// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { Upload } from 'stories/Inputs/Upload/Upload';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/Inputs/Upload',
  component: Upload,
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
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {};
