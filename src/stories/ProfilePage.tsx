// Global Imports
import * as React from 'react';

// Local Imports
import { useAppSelector } from 'app/hooks';
import { selectSession } from 'features/session/sessionSlice';

interface Props {}

// eslint-disable-next-line no-empty-pattern
export const ProfilePage = ({}: Props) => {
  const { isAuthLoading, isAuthenticated, user } = useAppSelector((state) =>
    selectSession(state)
  );

  if (isAuthLoading) {
    return <span>Loading...</span>;
  }

  return isAuthenticated ? (
    <span>Welcome {user?.name ?? 'User'}</span>
  ) : (
    <span>Please Login</span>
  );
};
