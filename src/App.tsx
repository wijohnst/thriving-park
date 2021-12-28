// Global Imports
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Local Imports
import { Button } from 'stories/Button';
import { ProfilePage } from 'stories/ProfilePage';

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

  React.useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Button label="Home" isMobile={false} onClick={() => {}} />
            }
          />
          <Route path="/logout" element={<span>Logged Out</span>} />
          <Route
            path="/profile"
            element={
              <ProfilePage
                user={user}
                isAuthenticated={isAuthenticated}
                isLoading={isLoading}
              />
            }
          />
        </Routes>
      </Router>
      <Button
        label="Login"
        isMobile={false}
        onClick={() => loginWithRedirect()}
      />
      <Button label="Logout" isMobile={false} onClick={() => logout()} />
    </>
  );
};
export default App;
