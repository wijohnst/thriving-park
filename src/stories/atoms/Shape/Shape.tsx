// Global Imports
import * as React from 'react';

// Local Imports
import { ShapeElement } from 'stories/atoms/Shape/Shape.style';

interface Props {
  height: number;
  isRectangle?: boolean;
  hasColor?: boolean;
  defaultColor: string;
  color?: string;
}

export const Shape = ({
  defaultColor,
  height,
  isRectangle = false,
  hasColor = false,
  color,
}: Props) => (
  <ShapeElement
    data-testid="shape-component"
    defaultColor={defaultColor}
    color={color}
    height={height}
    isRectangle={isRectangle}
    hasColor={hasColor}
  />
);
