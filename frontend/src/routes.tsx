import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import RegisterPage from './Pages/RegisterPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
