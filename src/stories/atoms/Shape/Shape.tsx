import * as React from 'react';

// Local Imports
import { ShapeDiv } from 'stories/atoms/Shape/Shape.style';

interface Props {
  backgroundColor?: string;
  shapeHeight: string;
  shapeWidth: string;
  testId: string;
}

export const Shape = ({
  backgroundColor = '#c4c4c3',
  shapeHeight = '10rem',
  shapeWidth = '10rem',
  testId = 'shape-test',
}: Props) => {
  return (
    <ShapeDiv
      backgroundColor={backgroundColor}
      shapeHeight={shapeHeight}
      shapeWidth={shapeWidth}
      data-testid={testId}
    />
  );
};
