// Global Imports
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	0%{
		transform: rotate(0deg);
	}
	100%{
		transform:rotate(360deg);
	}
`;
export const LoadingWrapper = styled.div<{
  height: number;
  width: number;
}>`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  animation: 2s ${spin} infinite ease-in-out;
`;
