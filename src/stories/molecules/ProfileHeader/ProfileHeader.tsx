// Global Imports
import React from 'react';

// Local Imports
import {
  IconLabelWrapper,
  ProfileHeaderWrapper,
  ProfilePicWrapper,
} from 'stories/molecules/ProfileHeader/ProfileHeader.style';
import { ProfilePic } from 'stories/ProfilePic';
import { IconLabel } from 'stories/molecules/IconLabel/IconLabel';
import { Label } from 'stories/Label';
import { UserInfo } from 'utils/sharedTypes';

interface Props {
  profilePictureURL: string;
  userInfo: UserInfo;
  onClick: () => void;
}

// eslint-disable-next-line no-empty-pattern
export const ProfileHeader = ({
  profilePictureURL,
  userInfo,
  onClick,
}: Props) => {
  const year = userInfo?.neighborDate?.getFullYear().toString();
  const neighborString = `${userInfo?.neighborType} since ${year}.`;
  return (
    <ProfileHeaderWrapper>
      <ProfilePicWrapper>
        <ProfilePic profilePictureURL={profilePictureURL} />
      </ProfilePicWrapper>
      <IconLabelWrapper>
        <IconLabel
          text={userInfo.userName}
          iconString="edit"
          onClick={onClick}
        />
      </IconLabelWrapper>
      {userInfo.neighborType ? (
        <Label
          text={neighborString}
          displayStyle="flexCenter"
          textStyle="light"
        />
      ) : (
        <span>Edit profile</span>
      )}
    </ProfileHeaderWrapper>
  );
};
