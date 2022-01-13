// Global Imports
import React from 'react';

// Local Imports
import { ProfilePageRenderWrapper } from 'stories/pages/ProfilePageRender/ProfilePageRender.style';
import { Loading } from 'stories/molecules/Loading/Loading';

interface Props {
  isLoading: boolean;
}

export const ProfilePageRender = ({ isLoading }: Props) => {
  return (
    <ProfilePageRenderWrapper>
      {isLoading ? <Loading /> : <span>ProfilePageRender Works!</span>}
    </ProfilePageRenderWrapper>
  );
};
