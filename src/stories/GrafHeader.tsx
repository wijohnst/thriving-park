// Global Imports
import * as React from 'react';

// Local Imports
import { Header } from 'stories/Header';
import { GrafLabel } from 'stories/GrafLabel';
import { SizesEnum } from 'utils/sharedTypes';
import {
  GrafHeaderWrapper,
  GrafWrapper,
  IconWrapper,
  TextContent,
} from 'stories/GrafHeader.style';
import { ReactComponent as Logo } from 'stories/assets/thriving_park_logo.svg';
import SvgIcon from 'stories/atoms/SVGIcon/svgIcon';

interface Props {
  isMobile: boolean;
}

export const GrafHeader = ({ isMobile = false }: Props) => {
  return (
    <GrafHeaderWrapper>
      <TextContent>
        <Header
          text={isMobile ? 'Thriving Park' : 'Driving Park'}
          subheadingText={isMobile ? null : 'Always on the move'}
          size={isMobile ? SizesEnum.Small : SizesEnum.Large}
        />
        {!isMobile && (
          <GrafWrapper>
            <GrafLabel text="Thriving" rotation={-7} />
          </GrafWrapper>
        )}
      </TextContent>
      {!isMobile && (
        <IconWrapper>
          {/* @ts-ignore - SVG exports as incorrect type */}
          <SvgIcon Icon={Logo} height={60} />
        </IconWrapper>
      )}
    </GrafHeaderWrapper>
  );
};
