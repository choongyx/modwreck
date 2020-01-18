import React from 'react';
import WelcomePage from './components/Welcome';
import SettingsPage from './components/Settings';
import GamePage from './components/Game';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <h1>ModWreck</h1>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={WelcomePage} />
                        <Route path="/settings" component={SettingsPage} />
                        <Route path="/game" component={GamePage} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;