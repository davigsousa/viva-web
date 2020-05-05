import React from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Profile from './pages/Profile';


const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:perfil" component={Profile} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
