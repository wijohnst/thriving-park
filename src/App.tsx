// Global Imports
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Local Imports
import { ProfilePage } from 'stories/pages/ProfilePage/ProfilePage';
import { useAppDispatch } from 'app/hooks';
import { startSession } from 'features/session/sessionSlice';
import { Layout } from 'stories/atoms/Layout/Layout';
import {
  useGetUserByIdQuery,
  useAddUserMutation,
} from 'features/session/sessionApi';
import { GrafHeader } from 'stories/molecules/GrafHeader/GrafHeader';
import { NavBar } from 'stories/molecules/NavBar/NavBar';
import { NavLinks } from 'utils/constants';
import useViewInit from 'hooks/useViewInit';
import { AuthCTA } from 'stories/molecules/AuthCTA/AuthCTA';

import { useAppSelector } from 'app/hooks';
import { selectScreenSize } from 'features/presentation/presentationSlice';

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

  const dispatch = useAppDispatch();

  useViewInit();

  // Getting the current screen size from Redux store so all downstream components could have access to it
  const screenSize = useAppSelector((state) => selectScreenSize(state));

  const {
    // data: userData,
    // isLoading: queryIsLoading,
    error: getUserError,
  } = useGetUserByIdQuery(
    {
      userId: user?.sub ?? '',
    },
    {
      skip: !user,
    }
  );

  const [addUser] = useAddUserMutation();

  React.useEffect(() => {
    if (getUserError && user?.sub) {
      addUser({
        userId: user?.sub,
      });
    }
  }, [getUserError]);

  React.useEffect(() => {
    const payload = {
      isAuthenticated,
      isAuthLoading: isLoading,
      user,
    };
    dispatch(startSession(payload));
  }, [isAuthenticated]);

  return (
    <Router>
      <Layout>
        <AuthCTA
          isAuthenticated={isAuthenticated}
          onClick={isAuthenticated ? () => logout() : () => loginWithRedirect()}
        />
        <GrafHeader screenSize={screenSize} />
        <NavBar appLinks={NavLinks} />
        <Routes>
          <Route path="/" element={<span>Home</span>} />
          <Route path="/logout" element={<span>Logged Out</span>} />
          <Route path="/profile" element={<ProfilePage userId={user?.sub} />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
