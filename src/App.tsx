// Global Imports
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Local Imports
import { Button } from 'stories/atoms/Button/Button';
import { ProfilePage } from 'stories/ProfilePage';
import { useAppDispatch } from 'app/hooks';
import { startSession } from 'features/session/sessionSlice';
import { Layout } from 'stories/Layout';
import {
  useGetUserByIdQuery,
  useAddUserMutation,
} from 'features/session/sessionApi';
import { GrafHeader } from 'stories/GrafHeader';
import { NavBar } from 'stories/NavBar';
import { NavLinks } from 'utils/constants';
import useViewInit from 'hooks/useViewInit';

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

  const dispatch = useAppDispatch();

  useViewInit();

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
        <GrafHeader isMobile={false} />
        <NavBar appLinks={NavLinks} />
        <Routes>
          <Route path="/" element={<span>Home</span>} />
          <Route path="/logout" element={<span>Logged Out</span>} />
          <Route path="/profile" element={<ProfilePage userId={user?.sub} />} />
        </Routes>
        <Button
          label="Login"
          isMobile={false}
          onClick={() => loginWithRedirect()}
        />
        <Button label="Logout" isMobile={false} onClick={() => logout()} />
      </Layout>
    </Router>
  );
};
export default App;
