// Global Imports
import React from 'react';

// Local Imports
import { ShapeWrapper } from 'stories/atoms/Shape/Shape.style';

interface Props {
  shape?: 'default' | 'rectangle' | 'color';
}

// eslint-disable-next-line no-empty-pattern
export const Shape = ({ shape = 'default' }: Props) => {
  return (
    <ShapeWrapper shape={shape} data-testid={`shape-component-${shape}`} />
  );
};
