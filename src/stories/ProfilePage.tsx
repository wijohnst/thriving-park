// Global Imports
import * as React from 'react';
import { User } from '@auth0/auth0-react';

interface Props {
  user: User | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// eslint-disable-next-line no-empty-pattern
export const ProfilePage = ({ user, isAuthenticated, isLoading }: Props) => {
  if (isLoading) {
    return <span>Loading...</span>;
  }

  return isAuthenticated ? (
    <span>Welcome {user?.name ?? 'User'}</span>
  ) : (
    <span>Please Login</span>
  );
};
