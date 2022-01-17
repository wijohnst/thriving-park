// Global Imports
import React from 'react';

// Local Imports
import { LoadingWrapper } from 'stories/molecules/Loading/Loading.style';
import { Icon } from 'stories/atoms/Icon/Icon';
import { ReactComponent as WheelIcon } from 'stories/assets/wheel_icon.svg';
import { defaultTheme } from 'themes';

interface Props {
  height?: number;
  width?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Loading = ({ height = 200, width = 200 }: Props) => {
  return (
    <LoadingWrapper data-testid="loading-spinner">
      <Icon
        icon={<WheelIcon fill={defaultTheme.secondaryBlue} />}
        height={height}
        width={width}
      />
    </LoadingWrapper>
  );
};
