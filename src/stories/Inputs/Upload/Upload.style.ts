// Global Imports
import styled from 'styled-components';

export const UploadWrapper = styled.div<{
  isActive: boolean;
}>`
  border: solid;
	border-color: ${(props) =>
    props.isActive ? `${props.theme.brightGreen};` : 'white;'}
	background-color: white;
  border-radius: 5px;
  outline: none;
	padding: 0.25rem;
  margin: 0.25rem;
  box-sizing: border-box;
  width: 100%;
	font-family: ${(props) => props.theme.primaryFontFamily};
	display: flex;
	flex-flow: row nowrap;
`;

export const UploadText = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  font-style: italic;
`;

export const UploadIconWrapper = styled.div``;

export const UploadElementWrapper = styled.div``;
