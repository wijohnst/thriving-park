// Global Imports
import React from 'react';

// Local Imports
import { EditWrapper } from 'stories/pages/ProfilePage/ProfilePageRender/Edit/Edit.style';
import { EditProfileForm } from 'stories/molecules/forms/EditProfileForm/EditProfileForm';

interface Props {
  isLoading: boolean;
  isSubmitted: boolean;
}

// eslint-disable-next-line no-empty-pattern
export const Edit = ({ isLoading = false, isSubmitted = false }: Props) => {
  return (
    <EditWrapper>
      <EditProfileForm isLoading={isLoading} isSubmitted={isSubmitted} />
    </EditWrapper>
  );
};
