/**
 * @file Handles styled-components for `GrafHeader` component
 *
 * @see GrafHeader.tsx
 */

// Global Imports
import styled from 'styled-components';

export const GrafHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: 'column';
  padding: 0;
`;

export const IconWrapper = styled.div`
  max-width: 20%;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

export const GrafWrapper = styled.div`
  width: 45%;
  position: absolute;
  top: 2rem;
  left: 0.5rem;
`;
