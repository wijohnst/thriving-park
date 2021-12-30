/**
 * @file Handles styled-components for 'Layout' component
 *
 * @see Layout.tsx
 */

import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: ${(props) => props.theme.primaryGradient};
  height: 100vh;
`;
