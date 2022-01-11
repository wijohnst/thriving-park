// Global Imports
import React from 'react';

// Local Imports
import { ContentWrapper as Content } from 'stories/atoms/ContentWrapper/ContentWrapper.style';

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ContentWrapper = (props: Props) => {
  return (
    <Content data-testid="content-wrapper">
      <span>Content Wrapper Works</span>
    </Content>
  );
};
