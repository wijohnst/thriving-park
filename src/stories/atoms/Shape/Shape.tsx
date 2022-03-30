// Global Imports
import React from 'react';

// Local Imports
import { ShapeWrapper } from 'stories/atoms/Shape/Shape.style';

interface Props {
  color?: '#C4C4C4' | '#8EFF01';
  shape?: 'square' | 'rectangle';
}

// eslint-disable-next-line no-empty-pattern
export const Shape = ({ color = '#C4C4C4', shape = 'square' }: Props) => {
  const testId = () => shape === 'rectangle' ? 'rectangle' : color === '#8EFF01' ? 'color' : 'default'

  return (
    <ShapeWrapper color={color} shape={shape} data-testid={`shape-component-${testId()}`} />
  );
};
