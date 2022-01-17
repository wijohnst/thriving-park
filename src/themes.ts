/**
 * @module
 *
 * This module defines theme objects that are consumed
 * by the styled-components `ThemeProvider` API and HOC
 */

export const defaultTheme = {
  // COLORS
  primaryBlue: '#1A7B88',
  secondaryBlue: '#2B2D42',
  brightGreen: '#ABFF4F',
  primaryGray: '#E5E5E5',
  secondaryGray: '#777777',
  bightPurple: '#7B61FF',
  errorRed: '#FD0000',
  warningBlue: '#0019FD',
  // BORDER
  borderRadius: '5px 5px 5px 5px',
  // TEXT
  primaryFontFamily: "'Helvetica', sans-serif",
  secondaryFontFamily: "'Permanent Marker', serif",
  // GRADIENTS
  primaryGradient: 'linear-gradient(180deg, #007B8C 16.84%, #D6FBAE 90.36%)',
  submissionGradient:
    'linear-gradient(90deg, #ABFF4F 0%, rgba(123, 97, 255, 0.52) 100%)',
  // BACKGROUNDS
  grayTransparent: 'rgba(196,196,196,0.1)',
  // SHADOWS
  primaryShadow: '0px 4px 4px rgba(0,0,0,0.25)',
};
