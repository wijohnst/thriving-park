// Global Imports
import { User } from '@auth0/auth0-react';

// Local Imports
import { AppLinkProps } from 'stories/atoms/AppLink/AppLink';

export const breakpoints: { [key: string]: string } = {
  mobile: '(min-width: 600px)',
  tablet: '(min-width: 1000px)',
  desktop: '(min-width: 1500px)',
};

export const TestUser: User = {
  name: 'Test User',
};

export const NavLinks: Array<AppLinkProps> = [
  {
    linkPath: '/profile',
    linkText: 'profile',
    isActive: false,
  },
  {
    linkPath: '/community',
    linkText: 'community',
    isActive: false,
  },
  {
    linkPath: '/info',
    linkText: 'info',
    isActive: false,
  },
];

export const defaultOptions = [
  {
    key: 1,
    label: 'Option 1',
    value: 1,
  },
  {
    key: 2,
    label: 'Option 2',
    value: 2,
  },
  {
    key: 3,
    label: 'Option 3',
    value: 3,
  },
];
