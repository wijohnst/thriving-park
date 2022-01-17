// Global Imports
import styled from 'styled-components';

export const SubmitWrapper = styled.div``;

export const SubmitInput = styled.button<{
  isLoading: boolean;
}>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 4rem 0.25rem 4rem;
  font-size: 1.5rem;
  background-color: white;
  text-decoration: none;
  outline: none;
  border: solid thin;
  border-color: ${(props) => props.theme.primaryGray};
  border-radius: 10px;
  font-family: ${(props) => props.theme.primaryFontFamily};

  :hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.brightGreen};
  }
`;

export const IconWrapper = styled.div`
  margin: 0 0 0rem 0.5rem;
`;
