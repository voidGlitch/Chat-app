import React from 'react';
import { Redirect, Route } from 'react-router';

const PublicRoute = ({ children, ...routeprops }) => {
  const profile = false;

  if (!profile) {
    return <Redirect to="/" />;
  }

  return <Route {...routeprops}>{children}</Route>;
};

export default PublicRoute;
