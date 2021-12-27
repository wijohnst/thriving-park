// Global Imports
import * as React from 'react';
import styled from 'styled-components';

// Local Imports
import { Header } from 'stories/Header';
import { GrafLabel } from 'stories/GrafLabel';
import { SizesEnum } from 'utils/sharedTypes';

interface Props {
  isMobile: boolean;
}

const Wrapper = styled.div``;

const GrafWrapper = styled.div`
  width: 55%;
  position: relative;
  top: -6.25rem;
  left: 1rem;
`;

// eslint-disable-next-line no-empty-pattern
export const GrafHeader = ({ isMobile = false }: Props) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
