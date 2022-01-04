// Global Imports
import styled from 'styled-components';

export const OptionWrapper = styled.button`
  display: inline-block;
  text-align: left;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  border: none;
  font-family: ${(props) => props.theme.primaryFontFamily};
  border-radius: 10px;
  padding: 0.5rem;
  width: 100%;
	transition: background-color .15s ease-in-out;
  :hover {
		transition: 
    cursor: pointer;
    background-color: ${(props) => props.theme.brightGreen};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
