/**
 * @file Handles styled-components for `GrafHeader` component
 *
 * @see GrafHeader.tsx
 */

// Global Imports
import styled from 'styled-components';

export const GrafHeaderWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const TextContent = styled.div``;

export const IconWrapper = styled.div`
  max-width: 20%;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

export const GrafWrapper = styled.div`
  width: 55%;
  position: relative;
  top: -6.25rem;
  left: 1 rem;
`;
