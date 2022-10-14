import styled from 'styled-components';

export const ShapeDiv = styled.div<{
  backgroundColor: string;
  shapeWidth: string;
  shapeHeight: string;
}>`
  width: ${(props) => props.shapeWidth}px;
  height: ${(props) => props.shapeHeight}px;
  background-color: ${(props) => props.backgroundColor};
`;
