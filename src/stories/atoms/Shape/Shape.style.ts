// Global Imports
import styled from 'styled-components';

// Local Imports
import { defaultTheme } from 'themes';
import { ShapeEnum, ColorEnum } from 'utils/sharedTypes';

export const ShapeWrapper = styled.div<{ shape: string }>`
  width: ${(props) => (props.shape === ShapeEnum.SQUARE ? '100px' : '200px')};
  height: 100px;
  background-color: ${(props) =>
    props.color === ColorEnum.GRAY ? defaultTheme.primaryGray : defaultTheme.brightGreen};
`;
