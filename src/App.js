import React from 'react';
import { Switch } from 'react-router';
// eslint-disable-next-line import/no-unresolved
import 'rsuite/dist/styles/rsuite-default.css';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import './styles/main.scss';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
    <Switch>
      <PublicRoute path="/signin">
        <Signin />{' '}
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
    </ProfileProvider>
  );
}

export default App;
