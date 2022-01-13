// Global Imports
import * as React from 'react';

// Local Imports
import {
  EditPicWrapper,
  IconWrapper,
} from 'stories/molecules/EditPic/EditPic.style';
import { SizesEnum } from 'utils/sharedTypes';

interface Props {
  children: Array<React.ReactElement> | React.ReactElement;
  icon: React.ReactElement;
  size: SizesEnum;
}

export interface SizeProps {
  top: string;
  right: string;
}

const sizePropsMap: { [key: number]: SizeProps } = {
  0: {
    top: '-50px',
    right: '1px',
  },
  1: {
    top: '-100px',
    right: '5px',
  },
  2: {
    top: '-250px',
    right: '-5px',
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const EditPic = ({ children, icon, size }: Props) => {
  const sizeProps: SizeProps = sizePropsMap[size];
  return (
    <EditPicWrapper data-testid="editpic-wrapper">
      {children}
      <IconWrapper top={sizeProps.top} right={sizeProps.right}>
        {icon}
      </IconWrapper>
    </EditPicWrapper>
  );
};
