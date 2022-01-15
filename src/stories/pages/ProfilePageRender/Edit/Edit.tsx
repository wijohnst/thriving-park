// Global Imports
import React from 'react';

// Local Imports
import { EditWrapper } from 'stories/pages/ProfilePageRender/Edit/Edit.style';
import { EditProfileForm } from 'stories/molecules/forms/EditProfileForm/EditProfileForm';

interface Props {}

// eslint-disable-next-line no-empty-pattern
export const Edit = ({}: Props) => {
  return (
    <EditWrapper>
      <EditProfileForm />
    </EditWrapper>
  );
};
