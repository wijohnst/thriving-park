// Global Imports
import * as React from 'react';

// Local Imports
import {
  IconLabelWrapper,
  IconWrapper,
} from 'stories/molecules/IconLabel/IconLabel.style';
import { Label } from 'stories/Label';
import { Icon } from 'stories/Icon';
import { ReactComponent as EditIcon } from 'stories/assets/edit_icon.svg';
import { TextStyles } from 'utils/sharedTypes';

export type Icons = 'edit' | 'add';
interface Props {
  iconString: Icons;
  text: string;
  textStyle?: TextStyles;
  onClick: () => void;
  iconColor?: string;
}

const getIconByString = (
  icon: string,
  iconColor?: string
): React.ReactElement => {
  switch (icon) {
    case 'edit':
      return <EditIcon fill={iconColor} />;
    default:
      return <EditIcon fill={iconColor} />;
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const IconLabel = ({
  iconString = 'edit',
  text,
  textStyle = 'bold',
  onClick,
  iconColor,
}: Props) => {
  return (
    <IconLabelWrapper>
      <Label text={text} textStyle={textStyle} displayStyle="flexRight" />
      <IconWrapper>
        <Icon
          icon={getIconByString(iconString, iconColor)}
          onClick={onClick}
          height={16}
          width={16}
        />
      </IconWrapper>
    </IconLabelWrapper>
  );
};
