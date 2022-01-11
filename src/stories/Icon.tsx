// Global Imports
import * as React from 'react';

// Local Imports
import { SvgContainer } from 'stories/svgicon-styles';
import { ReactComponent as DefaultIcon } from 'stories/assets/info_icon.svg';
import { IconWrapper } from 'stories/Icon.style';

interface Props {
  icon: React.ReactElement;
  height?: number;
  width?: number;
  onClick?: () => void;
}

// eslint-disable-next-line no-empty-pattern
export const Icon = ({
  icon: PassedIcon,
  height = 24,
  width = 24,
  onClick,
}: Props): React.ReactElement => {
  return (
    <IconWrapper>
      <SvgContainer height={height} width={width} onClick={onClick}>
        {PassedIcon || <DefaultIcon data-testid="default-icon" />}
      </SvgContainer>
    </IconWrapper>
  );
};
