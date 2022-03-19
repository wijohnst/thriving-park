// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { PicInfo } from 'stories/molecules/PicInfo/PicInfo';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';


export default {
  title: 'Design System/Molecules/PicInfo',
  component: PicInfo,
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
} as ComponentMeta<typeof PicInfo>;

const Template: ComponentStory<typeof PicInfo> = (args) => (
  <PicInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
   userInfo: {
    userName: 'Joe Byron',
    neighborType: undefined,
    neighborDate: undefined,
    userBlurb: undefined,
  },
  
    

}

export const NoPicture = Template.bind({});
NoPicture.args = {
  ...Default.args,
  profilePictureURL: 'NoPicture'

}
export const MissingUserInfo = Template.bind({});

MissingUserInfo.args = {
  ...Default.args,

  // I didn't want to write the whole object but I couldn't think
  // of a clever way to have the Missing User Info. Let me know if there is a better way. 
   userInfo: {
    userName:'', 
    neighborType: undefined,
    neighborDate: undefined,
    userBlurb: undefined,
  },
  
}