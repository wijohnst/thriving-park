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
  /** Is the component loading? */
  isLoading: boolean;
  /** Is the user editing their profile? */
  isEdit: boolean;
  /** What's the known information for the user? */
  userInfo: UserInfo;
  /** Where should we look for the user's profile picture? */
  profilePictureURL: string;
  /** What should happen when we click the various edit icons? */
  onEditClick: () => void;
}

export const ProfilePageRender = ({
  isLoading,
  isEdit,
  userInfo,
  profilePictureURL,
  // eslint-disable-next-line no-console
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
