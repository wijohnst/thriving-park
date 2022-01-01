import styled from 'styled-components';

export const AppLinkWrapper = styled.div<{
  isActive: boolean;
}>`
  font-family: ${(props) => props.theme.primaryFontFamily};
  font-weight: 700;
  border-bottom: ${(props) => (props.isActive ? 'solid thin black' : 'none')};
  opacity: ${(props) => (props.isActive ? '100%' : '30%')};
  padding: 0.25rem;
  :hover {
    cursor: pointer;
  }
`;
