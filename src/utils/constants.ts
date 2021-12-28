import { User } from '@auth0/auth0-react';

export const breakpoints: { [key: string]: string } = {
  mobile: '(min-width: 600px)',
  tablet: '(min-width: 1000px)',
  desktop: '(min-width: 1500px)',
};

export const TestUser: User = {
  name: 'Test User',
};
