// Global Imports
import React from 'react';

// Local Imports
import {
  
  PicInfoWrapper
} from 'stories/molecules/PicInfo/PicInfo.style';
import { ProfilePic } from 'stories/atoms/ProfilePic/ProfilePic';
import { Label } from 'stories/atoms/Label/Label';
import { CTALink } from 'stories/atoms/CTALink/CTALink';


import { UserInfo } from 'utils/sharedTypes';

interface Props {
  onClick: () => void;
  userInfo: UserInfo;
  profilePictureURL: string;

}


export const PicInfo = ( {
    onClick,
    userInfo,
    profilePictureURL
} : Props) =>{
  
  return (
    <PicInfoWrapper>
      
        <ProfilePic profilePictureURL={profilePictureURL}/>  

        <Label text={userInfo.userName} />

        <CTALink text="Update your profile"  onClick={onClick}/>
    </PicInfoWrapper>
  );
};
