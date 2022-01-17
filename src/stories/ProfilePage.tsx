// Global Imports
import * as React from 'react';

// Local Imports
import { useAppSelector } from 'app/hooks';
import { selectSession } from 'features/session/sessionSlice';
import { useGetUserByIdQuery } from 'features/session/sessionApi';
import { ProfilePic } from 'stories/atoms/ProfilePic/ProfilePic';
import { SizesEnum } from 'utils/sharedTypes';
import { ProfilePageWrapper, TextPicWrapper } from 'stories/ProfilePage.style';

interface Props {
  userId: string | undefined;
}

// eslint-disable-next-line no-empty-pattern
export const ProfilePage = ({ userId = '' }: Props) => {
  const { data, isLoading: queryIsLoading } = useGetUserByIdQuery(
    {
      userId,
    },
    {
      skip: userId === '',
    }
  );

  const { isAuthLoading, isAuthenticated, user } = useAppSelector((state) =>
    selectSession(state)
  );

  if (isAuthLoading || queryIsLoading) {
    return <span>Loading...</span>;
  }

  return isAuthenticated && data ? (
    <ProfilePageWrapper>
      <TextPicWrapper>
        <span>Welcome {user?.name ?? 'User'}</span>
        <ProfilePic
          profilePictureURL={data.data.profilePictureURL}
          size={SizesEnum.Medium}
        />
      </TextPicWrapper>
    </ProfilePageWrapper>
  ) : (
    <span>Please Login</span>
  );
};
