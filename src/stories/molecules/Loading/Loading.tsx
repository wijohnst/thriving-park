// Global Imports
import React from 'react';

// Local Imports
import { LoadingWrapper } from 'stories/molecules/Loading/Loading.style';
import { Icon } from 'stories/Icon';
import { ReactComponent as WheelIcon } from 'stories/assets/wheel_icon.svg';
import { defaultTheme } from 'themes';

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Loading = (props: Props) => {
  return (
    <LoadingWrapper data-testid="loading-spinner">
      <Icon
        icon={<WheelIcon fill={defaultTheme.secondaryBlue} />}
        height={200}
        width={200}
      />
    </LoadingWrapper>
  );
};
