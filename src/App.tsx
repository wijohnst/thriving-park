// Global Imports
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Local Imports
import { Button } from 'stories/Button';

const App = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
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
        </Routes>
      </Router>
      <Button
        label="Login"
        isMobile={false}
        onClick={() => loginWithRedirect()}
      />
    </>
  );
};
export default App;
