// Global Imports
import * as React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';

// Local Imports
import { Button } from 'stories/Button';

const App = () => (
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
				<Route path="/" element={<Button label="Home" isMobile={false} onClick={() => { }} />} />
			</Routes>
		</Router>
		<span>Test</span>
	</>
	);
export default App;
