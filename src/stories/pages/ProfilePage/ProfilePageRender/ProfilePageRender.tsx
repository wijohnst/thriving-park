// Global Imports
import * as React from 'react';

// Local Imports
import {
  ProfilePageRenderWrapper,
  Main,
} from 'stories/pages/ProfilePage/ProfilePageRender/ProfilePageRender.style';
import { Loading } from 'stories/molecules/Loading/Loading';
import { Edit } from 'stories/pages/ProfilePage/ProfilePageRender/Edit/Edit';
import { Display } from 'stories/pages/ProfilePage/ProfilePageRender/Display/Display';
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
  /** HTTP lifecycle state */
  isFormSubmitting: boolean;
  /** HTTP lifecycle state */
  isFormSubmitted: boolean;
  /** What should happen when we click the various edit icons? */
  onEditClick: () => void;
}

export const ProfilePageRender = ({
  isLoading,
  isEdit,
  userInfo,
  profilePictureURL,
  isFormSubmitting,
  isFormSubmitted,
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
          {isEdit && (
            <Edit isLoading={isFormSubmitting} isSubmitted={isFormSubmitted} />
          )}
          {!isEdit && !hasIncompleteInfo && <Display userInfo={userInfo} />}
        </Main>
      )}
    </ProfilePageRenderWrapper>
  );
};
