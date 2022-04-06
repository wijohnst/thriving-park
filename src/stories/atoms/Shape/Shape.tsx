// Global Imports
import React from 'react';

// Local Imports
import { ShapeWrapper } from 'stories/atoms/Shape/Shape.style';
import { ShapeEnum, ColorEnum } from 'utils/sharedTypes';

interface Props {
  shape?: ShapeEnum;
  color?: ColorEnum;
}

// eslint-disable-next-line no-empty-pattern
export const Shape = ({ shape = ShapeEnum.SQUARE, color = ColorEnum.GRAY }: Props) => {
  return (
    <ShapeWrapper shape={shape} color={color} data-testid={`shape-component-${shape}`} />
  );
};
