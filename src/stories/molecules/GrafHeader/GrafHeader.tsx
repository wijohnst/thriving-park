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
import { screenSizes, defaultScreenSize } from 'utils/constants';

interface Props {
  screenSize: string;
}

export const GrafHeader = ({ screenSize = defaultScreenSize }: Props) => {
  const getSize = () => {
    if (screenSize === screenSizes.Mobile) {
      return SizesEnum.Small;
    }
    if (screenSize === screenSizes.Tablet) {
      return SizesEnum.Medium;
    }
    return SizesEnum.Large;
  };

  return (
    <GrafHeaderWrapper>
      <TextContent>
        <Header
          text={
            screenSize === screenSizes.Mobile ? 'Thriving Park' : 'Driving Park'
          }
          subheadingText={
            screenSize === screenSizes.Mobile ? null : 'Always on the move'
          }
          size={getSize()}
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
