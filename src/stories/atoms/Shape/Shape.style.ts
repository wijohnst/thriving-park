// Global Imports
import styled from 'styled-components';

// Instead of having a defaultColor in props, maybe add it to themes.ts would be better?
export const ShapeElement = styled.div<{
  isRectangle: boolean;
  height: number;
  hasColor: boolean;
  defaultColor: string;
  color?: string;
}>`
  width: ${(props) =>
    props.isRectangle ? `${props.height * 2}px` : `${props.height}px`};
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) =>
    props.hasColor ? props.color : props.defaultColor};
`;
