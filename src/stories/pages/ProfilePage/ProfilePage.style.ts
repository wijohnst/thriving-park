/**
 * @file Hadles styled-components for 'ProfilePage' page
 *
 * @see ProfilePage.tsx
 */

import styled from 'styled-components';

export const ProfilePageWrapper = styled.div`
  font-family: ${(props) => props.theme.primaryFontFamily};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const TextPicWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
