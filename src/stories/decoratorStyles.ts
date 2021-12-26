/**
 * @module
 *
 * Defines inline styles for Storybook decorators
 *
 * @see decorators
 */

export const paddedDiv = {
  padding: '10px',
};

export const centerDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const standardWrapper = {
  ...paddedDiv,
  ...centerDiv,
};
