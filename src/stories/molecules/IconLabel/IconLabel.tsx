// Global Imports
import React from 'react';

// Local Imports
import { IconLabelWrapper } from 'stories/molecules/IconLabel/IconLabel.style';
import { Label } from 'stories/Label';
import { Icon } from 'stories/Icon';
import { ReactComponent as InfoIcon } from 'stories/assets/info_icon.svg';

interface Props {
  text: string;
  iconColor?: string;
  onClick: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const IconLabel = ({ text, iconColor = 'black', onClick }: Props) => {
  return (
    <IconLabelWrapper>
      <Label text={text} displayStyle="flexLeft" />
      <Icon icon={<InfoIcon fill={iconColor} />} onClick={onClick} />
    </IconLabelWrapper>
  );
};
