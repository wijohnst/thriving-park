// Global Imports
import styled from 'styled-components';

export const ErrorMessageWrapper = styled.div``;

export const ErrorMessageSpan = styled.span<{
  isWarning: boolean;
}>`
  font-family: ${(props) => props.theme.primaryFontFamily};
  color: ${(props) =>
    props.isWarning ? props.theme.warningBlue : props.theme.errorRed};
  letter-spacing: 0.15rem;
  font-weight: 300;
`;
