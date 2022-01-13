// Global Imports
import styled from 'styled-components';

export const CardWrapper = styled.div<{ color: string }>`
  font-family: ${(props) => props.theme.primaryFontFamily};
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.primaryShadow};
`;
