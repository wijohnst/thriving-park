/**
 * @file Handles styled-components for `ProfilePic` component
 *
 * @see ProfilePic.tsx
 */

// Global Imports
import styled from 'styled-components';
import defaultImage from 'stories/assets/user_icon_image.png';

export const ProfilePicWrapper = styled.div<{
  imgURL?: string;
  size: number;
}>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-image: ${(props) =>
    !props.imgURL ? `url(${defaultImage})` : `url(${props.imgURL})`};
  background-repeat: no-repeat;
  background-size: ${(props) => `${props.size}px ${props.size}px`};
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  clip-path: ${(props) => (!props.imgURL ? null : `circle(50% at 50% 50%)`)};
`;
