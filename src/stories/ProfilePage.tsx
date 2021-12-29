// Global Imports
import * as React from 'react';

// Local Imports
import { useAppSelector } from 'app/hooks';
import { selectSession } from 'features/session/sessionSlice';
import { useGetUserQuery } from 'features/session/sessionApi';

interface Props {}

// eslint-disable-next-line no-empty-pattern
export const ProfilePage = ({}: Props) => {
  const { data, isLoading: queryIsLoading } = useGetUserQuery('userId');
  const { isAuthLoading, isAuthenticated, user } = useAppSelector((state) =>
    selectSession(state)
  );

  if (isAuthLoading || queryIsLoading) {
    return <span>Loading...</span>;
  }

  return isAuthenticated && data ? (
    <>
      <span>Welcome {user?.name ?? 'User'}</span>
      <img src={data.profileURI} alt="profile" />
    </>
  ) : (
    <span>Please Login</span>
  );
};
