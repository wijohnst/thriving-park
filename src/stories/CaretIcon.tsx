// Global Imports
import React from 'react';

// Local Imports
import { SvgContainer } from 'stories/svgicon-styles';
import { ReactComponent as CaretSvg } from 'stories/assets/caret_icon.svg';
import { CaretIconWrapper } from 'stories/CaretIcon.style';

export type Orientation = 'Up' | 'Down';

interface Props {
  orientation: Orientation;
  height?: number;
  width?: number;
}

export const CaretIcon = ({ orientation = 'Down', height, width }: Props) => {
  return (
    <CaretIconWrapper orientation={orientation}>
      <SvgContainer height={height} width={width}>
        <CaretSvg />
      </SvgContainer>
    </CaretIconWrapper>
  );
};
