import styled from 'styled-components';

export const ShapeDiv = styled.div<{
  backgroundColor: string;
  shapeWidth: string;
  shapeHeight: string;
}>`
  width: ${(props) => `${props.shapeWidth}`};
  height: ${(props) => `${props.shapeHeight}`};
  background-color: ${(props) => `${props.backgroundColor}`};
`;
