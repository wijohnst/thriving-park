// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { EditPic } from 'stories/molecules/EditPic/EditPic';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';
import {
  Default as ProfilePic,
  Small as ProfilePicSmall,
  Large as ProfilePicLarge,
} from 'stories/ProfilePic.stories';
import { Icon } from 'stories/Icon';
import { ReactComponent as PlusIcon } from 'stories/assets/plus_icon.svg';
import { SizesEnum } from 'utils/sharedTypes';

export default {
  title: 'Design System/Molecules/EditPic',
  component: EditPic,
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
} as ComponentMeta<typeof EditPic>;

const Template: ComponentStory<typeof EditPic> = (args) => (
  <EditPic {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <ProfilePic {...ProfilePic.args} />,
  icon: <Icon icon={<PlusIcon />} />,
  size: SizesEnum.Medium,
};

export const Small = Template.bind({});
Small.args = {
  children: <ProfilePicSmall {...ProfilePicSmall.args} />,
  icon: <Icon icon={<PlusIcon />} height={16} width={16} />,
  size: SizesEnum.Small,
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
};

export const Large = Template.bind({});
Large.args = {
  children: <ProfilePicLarge {...ProfilePicLarge.args} />,
  icon: <Icon icon={<PlusIcon />} height={80} width={80} />,
  size: SizesEnum.Large,
};
