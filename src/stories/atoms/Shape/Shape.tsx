import * as React from 'react';

// Local Imports
import { ShapeDiv } from 'stories/atoms/Shape/Shape.style';
import { defaultTheme } from 'themes';

interface Props {
  backgroundColor?: string;
  shapeHeight: string;
  shapeWidth: string;
  testId: string;
}

export const Shape = ({
  backgroundColor = defaultTheme.primaryGray,
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
