// Global Imports
import * as React from 'react';

// Local Imports
import {
  Blurb,
  DisplayContent,
  // DisplayHeader,
  // DisplayHeaderContent,
  DisplayWrapper,
} from 'stories/pages/ProfilePage/ProfilePageRender/Display/Display.style';
// import { ProfilePic } from 'stories/ProfilePic';
// import { IconLabel } from 'stories/molecules/IconLabel/IconLabel';
import { UserInfo } from 'utils/sharedTypes';
// import { Label } from 'stories/Label';
import { Card } from 'stories/atoms/Card/Card';
import { defaultTheme } from 'themes';

interface Props {
  userInfo: UserInfo;
}

// eslint-disable-next-line no-empty-pattern
export const Display = ({ userInfo }: Props) => {
  return (
    <DisplayWrapper>
      {userInfo.userBlurb && (
        <DisplayContent data-testid='display-content'>
          <Card color={defaultTheme.brightPurple}>
            <Blurb>{userInfo.userBlurb}</Blurb>
          </Card>
        </DisplayContent>
      )}
    </DisplayWrapper>
  );
};
