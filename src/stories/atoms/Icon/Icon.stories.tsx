import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from 'stories/atoms/Icon/Icon';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';
import { ReactComponent as CaretIcon } from 'stories/assets/caret_icon.svg';
import { ReactComponent as XIcon } from 'stories/assets/ex_icon.svg';
import { ReactComponent as Plus } from 'stories/assets/plus_icon.svg';

export default {
  title: 'Design System/Atoms/Icon',
  component: Icon,
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
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Caret = Template.bind({});
Caret.args = {
  ...Default.args,
  icon: <CaretIcon data-testid="caret-icon" />,
};

export const CustomOnClick = Template.bind({});
CustomOnClick.args = {
  ...Default.args,
  // eslint-disable-next-line no-console
  onClick: () => console.log('Custom on click...'),
};

export const ColoredIcon = Template.bind({});
ColoredIcon.args = {
  ...Default.args,
  icon: <CaretIcon fill={defaultTheme.brightGreen} />,
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
  ...Default.args,
  icon: <XIcon />,
};

export const PlusIcon = Template.bind({});
PlusIcon.args = {
  ...Default.args,
  icon: <Plus />,
};
