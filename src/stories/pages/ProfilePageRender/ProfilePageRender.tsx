// Global Imports
import * as React from 'react';

// Local Imports
import {
  ProfilePageRenderWrapper,
  Main,
} from 'stories/pages/ProfilePageRender/ProfilePageRender.style';
import { Loading } from 'stories/molecules/Loading/Loading';
import { Edit } from 'stories/pages/ProfilePageRender/Edit/Edit';

interface Props {
  isLoading: boolean;
  isEdit: boolean;
}

export const ProfilePageRender = ({ isLoading, isEdit }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <ProfilePageRenderWrapper>
      {isLoading && <Loading />}
      {!isLoading && (
        <Main>
          {/* TODO: Add ProfileHeader Molecule */}
          {isEdit && <Edit />}
          {!isEdit && <span>Display</span>}
        </Main>
      )}
    </ProfilePageRenderWrapper>
  );
};
