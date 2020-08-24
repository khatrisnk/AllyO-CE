import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import App from './App';
import Redirect from './redirect';
  
const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/redirect/:site">
                <Redirect />
            </Route>
        </Switch>
    </Router>
);

export default Routes;