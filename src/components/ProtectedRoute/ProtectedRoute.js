import React from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from '../Loading/Loading';

const ProtectedRoute = ({ path, isChecking, loggedIn, children }) => {

  return (
    <Route exact path={path}>
      { isChecking ? (
          <Loading />
      ) : (
        loggedIn ? children : <Redirect to="/signin" />
      )}
    </Route>
  );
};

export default ProtectedRoute;
