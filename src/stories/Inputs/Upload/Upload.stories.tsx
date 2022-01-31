// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { Upload } from 'stories/Inputs/Upload/Upload';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/Inputs/UploadInput',
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
Default.args = {
  isUploading: false,
  onChange: () => {},
};

export const Uploading = Template.bind({});
Uploading.args = {
  ...Default.args,
  isUploading: true,
};

export const UploadSuccessful = Template.bind({});
UploadSuccessful.args = {
  ...Default.args,
  isUploadSuccessful: true,
};

export const Failed = Template.bind({});
Failed.args = {
  ...Default.args,
  hasFailed: true,
};

export const AcceptsOnlyImages = Template.bind({});
AcceptsOnlyImages.args = {
  ...Default.args,
  accept: 'image/*',
};

export const UploadMultipleFiles = Template.bind({});
UploadMultipleFiles.args = {
  ...Default.args,
  isMultiple: true,
};
