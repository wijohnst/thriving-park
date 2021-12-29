// Global Imports
import React from 'react';

// Local Imports
import { ProfilePicWrapper } from 'stories/ProfilePic.style';
import { SizesEnum } from 'utils/sharedTypes';

interface Props {
  profilePictureURL?: string;
  size?: SizesEnum;
}

const ProfileSizes: { [index: number]: number } = {
  [SizesEnum.Small]: 50,
  [SizesEnum.Medium]: 100,
  [SizesEnum.Large]: 250,
};

// eslint-disable-next-line no-empty-pattern
export const ProfilePic = ({
  profilePictureURL = undefined,
  size = SizesEnum.Medium,
}: Props) => {
  return (
    <ProfilePicWrapper imgURL={profilePictureURL} size={ProfileSizes[size]} />
  );
};
