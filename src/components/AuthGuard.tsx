import React, { useContext } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

import { FirebaseContext } from "../context/FirebaseProvider";

interface AuthGuardProps extends RouteProps {
  secure?: boolean;
  redirect: string;
}
const AuthGuard: React.FC<AuthGuardProps> = ({ secure, redirect, ...rest }) => {
  const { user } = useContext(FirebaseContext);
  return (!!user && secure) || (!user && !secure) ? (
    <Route {...rest} />
  ) : (
    <Redirect to={redirect} />
  );
};

AuthGuard.defaultProps = {
  secure: false,
};

export default AuthGuard;
