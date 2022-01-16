// Global Imports
import * as React from 'react';

// Local Imports
import {
  ProfilePageRenderWrapper,
  Main,
} from 'stories/pages/ProfilePageRender/ProfilePageRender.style';
import { Loading } from 'stories/molecules/Loading/Loading';
import { Edit } from 'stories/pages/ProfilePageRender/Edit/Edit';
import { Display } from 'stories/pages/ProfilePageRender/Display/Display';
import { ProfileHeader } from 'stories/molecules/ProfileHeader/ProfileHeader';
import { UserInfo } from 'utils/sharedTypes';

interface Props {
  isLoading: boolean;
  isEdit: boolean;
  userInfo: UserInfo;
  profilePictureURL: string;
  onEditClick: () => void;
}

export const ProfilePageRender = ({
  isLoading,
  isEdit,
  userInfo,
  profilePictureURL,
  onEditClick,
}: Props) => {
  const hasIncompleteInfo = Object.values(userInfo).some((value) => !value);
  return (
    <ProfilePageRenderWrapper>
      {isLoading && <Loading />}
      {!isLoading && (
        <Main>
          <ProfileHeader
            userInfo={userInfo}
            isEdit={isEdit}
            profilePictureURL={profilePictureURL}
            onClick={onEditClick}
          />
          {isEdit && <Edit />}
          {!isEdit && !hasIncompleteInfo && <Display userInfo={userInfo} />}
        </Main>
      )}
    </ProfilePageRenderWrapper>
  );
};
