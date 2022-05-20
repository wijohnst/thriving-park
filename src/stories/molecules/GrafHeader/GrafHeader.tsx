// Global Imports
import * as React from 'react';

// Local Imports
import { Header } from 'stories/atoms/Header/Header';
import { GrafLabel } from 'stories/atoms/GrafLabel/GrafLabel';
import { SizesEnum } from 'utils/sharedTypes';
import {
  GrafHeaderWrapper,
  GrafWrapper,
  IconWrapper,
  TextContent,
} from 'stories/molecules/GrafHeader/GrafHeader.style';
import { ReactComponent as Logo } from 'stories/assets/thriving_park_logo.svg';
import SvgIcon from 'stories/atoms/SVGIcon/svgIcon';

import { defaultScreenSize } from 'utils/constants';
import { screenSizes } from 'utils/constants';

// Location of Demo code:
//                       utils/constants.ts
//                       App.tsx
//                       GrafHeader.tsx
//                       Header.tsx

// What Demo code implemented:
//        -- Made <GrafHeader> responsive to 3 screensize breakpoints. Only <Text> redered if user is on a mobile device.
//           When on a tablet <Text> and <SubheadingText> will be rendered next to each other horizontally with a column gap.
//           When on a desktop <Text> and <SubheadingText> will be rendered next to each other vertically.

//
// Recommendation for the Spike story which is to find the best way to build responsive components:
// Replace isMobile prop with screenSize prop in the representation of a string
// With this approach there are several things added to our TODO:
//        1. Need to import { screenSizes } from 'utils/constants' for every responsive component
//        2. Need to use ternary operator or nested ternary operators to assign values for layout based on 3 breakpoints
//        3. (Tech debt) Need to locate the wrapper components

// Pro of choosing the screenSize prop as a string:
//        1. More flexibility for components with layout that is effective to more than one screen breakpoint. We have 3 breakpoints of screensize and we are passing the current
//           screenSize down from App component. Different components nested inside App may have layout subject to
//           different breakpoint. For example in <GrafHeader> we are considering the layout for Desktop and Tablet the same, which
//           means we only need to compare the value of ScreenSize with screenSizes.Mobile, the conditional rending will take care
//           of the rest.

// Con of choosing the screenSize prop as a string:
//        1. If a component needs to consider more than 1 breakpoint, nested terneries would be implemented. It wouldn't be the most readable code.

interface Props {
  screenSize: string;
}

export const GrafHeader = ({ screenSize = defaultScreenSize }: Props) => {
  return (
    <GrafHeaderWrapper>
      <TextContent>
        <Header
          screenSize={screenSize}
          text={
            screenSize === screenSizes.Mobile ? 'Thriving Park' : 'Driving Park'
          }
          subheadingText={
            screenSize === screenSizes.Mobile ? null : 'Always on the move'
          }
          size={
            screenSize === screenSizes.Mobile
              ? SizesEnum.Small
              : SizesEnum.Large
          }
        />
        {screenSize !== screenSizes.Mobile && (
          <GrafWrapper>
            <GrafLabel text="Thriving" rotation={-7} />
          </GrafWrapper>
        )}
      </TextContent>
      {screenSize !== screenSizes.Mobile && (
        <IconWrapper>
          {/* @ts-ignore - SVG exports as incorrect type */}
          <SvgIcon Icon={Logo} height={60} />
        </IconWrapper>
      )}
    </GrafHeaderWrapper>
  );
};
