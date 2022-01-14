// Global Imports
import React from 'react';

// Local Imports
import { DisplayWrapper } from 'stories/pages/ProfilePageRender/Display/Display.style';
import { ProfilePic } from 'stories/ProfilePic';
import { IconLabel } from 'stories/molecules/IconLabel/IconLabel';

interface Props {
  profilePictureURL: string;
  userName: string;
  onClick: () => void;
}

// eslint-disable-next-line no-empty-pattern
export const Display = ({ profilePictureURL, userName, onClick }: Props) => {
  return (
    <DisplayWrapper>
      <ProfilePic profilePictureURL={profilePictureURL} />
      <IconLabel iconString="edit" text={userName} onClick={onClick} />
      <span>Display Works!</span>
    </DisplayWrapper>
  );
};
