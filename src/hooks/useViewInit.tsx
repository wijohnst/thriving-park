// Global Imports
import * as React from 'react';
import { useAppDispatch } from 'app/hooks';

// Local Imports
import useMedia from 'hooks/useMedia';
import { breakpoints } from 'utils/constants';
import { updateScreenSize } from 'features/presentation/presentationSlice';

const useViewInit = () => {
  const { desktop, tablet, mobile } = breakpoints;
  const dispatch = useAppDispatch();

  const screenSize = useMedia(
    [desktop, tablet, mobile],
    ['Desktop', 'Tablet', 'Mobile'],
    'Desktop'
  );

  React.useEffect(() => {
    // @ts-ignore
    dispatch(updateScreenSize(screenSize));
  }, [screenSize]);
};

export default useViewInit;
