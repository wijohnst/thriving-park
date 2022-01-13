// Global Imports
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	100%{
		transform:rotate(360deg);
	}
`;
export const LoadingWrapper = styled.div`
  animation: 2s ${spin} infinite ease-in-out;
`;
