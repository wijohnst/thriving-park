// Global Imports
import * as React from 'react';

// Local Imports
import { SvgContainer } from 'stories/atoms/SVGIcon/svgicon-styles';
import { ReactComponent as DefaultIcon } from 'stories/assets/info_icon.svg';
import { IconWrapper } from 'stories/atoms/Icon/Icon.style';

interface Props {
  /** Which Icon should be displayed? */
  icon: React.ReactElement;
  /** How tall should the Icon be? */
  height?: number;
  /** How wide should the Icon be? */
  width?: number;
  /** What should happen when you click the Icon? */
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
