// Global Imports
import styled from 'styled-components';

// Local Imports
import { defaultTheme } from 'themes';

export const ShapeWrapper = styled.div<{ shape: string }>`
  width: ${(props) => (props.shape === 'rectangle' ? '200px' : '100px')};
  height: 100px;
  background-color: ${(props) =>
    props.shape === 'color' ? defaultTheme.brightGreen : defaultTheme.primaryGray};
`;
