// Global Imports
import React from 'react';

// Local Imports
import { SvgContainer } from 'stories/atoms/SVGIcon/svgicon-styles';
import { ReactComponent as CaretSvg } from 'stories/assets/caret_icon.svg';
import { CaretIconWrapper } from 'stories/molecules/CaretIcon/CaretIcon.style';

export type Orientation = 'Up' | 'Down';

interface Props {
  orientation: Orientation;
  height?: number;
  width?: number;
  onClick?: () => void;
}

export const CaretIcon = ({
  orientation = 'Down',
  height,
  width,
  onClick,
}: Props) => {
  return (
    <CaretIconWrapper
      orientation={orientation}
      onClick={onClick}
      data-testid="caret-icon"
    >
      <SvgContainer height={height} width={width}>
        <CaretSvg />
      </SvgContainer>
    </CaretIconWrapper>
  );
};
