// Global Imports
import React from 'react';

// Local Imports
import {
  IconLabelWrapper,
  ProfileHeaderWrapper,
  ProfilePicWrapper,
} from 'stories/molecules/ProfileHeader/ProfileHeader.style';
import { ProfilePic } from 'stories/atoms/ProfilePic/ProfilePic';
import { EditPic } from 'stories/molecules/EditPic/EditPic';
import { IconLabel } from 'stories/molecules/IconLabel/IconLabel';
import { Label } from 'stories/atoms/Label/Label';
import { SizesEnum, UserInfo } from 'utils/sharedTypes';
import { ReactComponent as PlusIcon } from 'stories/assets/plus_icon.svg';
import { ReactComponent as XIcon } from 'stories/assets/ex_icon.svg';
import { CTALink } from 'stories/atoms/CTALink/CTALink';

interface Props {
  profilePictureURL: string;
  userInfo: UserInfo;
  isEdit: boolean;
  isPhotoUpload: boolean;
  onClick: () => void;
}

export const ProfileHeader = ({
  profilePictureURL,
  userInfo,
  isEdit,
  isPhotoUpload,
  onClick,
}: Props) => {
  const year = userInfo?.neighborDate?.getFullYear().toString();
  const neighborString = `${userInfo?.neighborType} since ${year}.`;
  return (
    <ProfileHeaderWrapper>
      <ProfilePicWrapper>
        {isEdit ? (
          <EditPic
            icon={
              isPhotoUpload ? (
                <XIcon height={24} width={24} />
              ) : (
                <PlusIcon height={24} width={24} />
              )
            }
            size={SizesEnum.Medium}
            onClick={onClick}
          >
            <ProfilePic profilePictureURL={profilePictureURL} />
          </EditPic>
        ) : (
          <ProfilePic profilePictureURL={profilePictureURL} />
        )}
      </ProfilePicWrapper>
      {!isEdit && (
        <>
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
            <CTALink
              text="Finish setting up your profile +"
              onClick={onClick}
            />
          )}
        </>
      )}
    </ProfileHeaderWrapper>
  );
};
