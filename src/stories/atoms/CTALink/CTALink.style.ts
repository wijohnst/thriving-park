// Global Imports
import styled from 'styled-components';

export const CTALinkWrapper = styled.div<{
  color: string;
}>`
  padding: 0 0.25rem 0 0.25rem;
  border-bottom: ${(props) => `solid thin ${props.color}`};
  :hover {
    cursor: pointer;
  }
`;

export const LinkText = styled.span<{
  color: string;
}>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.theme.primaryFontFamily};
`;
