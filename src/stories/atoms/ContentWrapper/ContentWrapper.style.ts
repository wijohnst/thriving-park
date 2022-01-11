// Global Imports
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  font-family: ${(props) => props.theme.primaryFontFamily};
  background-color: ${(props) => props.theme.grayTransparent};
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  border-radius: 5px;
`;
