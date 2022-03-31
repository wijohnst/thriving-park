// Global Imports
import styled from 'styled-components';

export const ShapeWrapper = styled.div<{ shape: string }>`
  width: ${(props) => (props.shape === 'rectangle' ? '200px' : '100px')};
  height: 100px;
  background-color: ${(props) =>
    props.shape === 'color' ? '#8EFF01' : '#C4C4C4'};
`;
