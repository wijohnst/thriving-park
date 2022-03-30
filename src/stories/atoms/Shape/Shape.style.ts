// Global Imports
import styled from 'styled-components';

export const ShapeWrapper = styled.div<{ color: string; shape: string }>`
  width: ${(props) => (props.shape === 'square' ? '100px' : '200px')};
  height: 100px;
  background-color: ${(props) => props.color};
`;
