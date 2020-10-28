import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import { FirebaseProvider } from "./context/FirebaseProvider";
import { ErrorPage } from "./pages/ErrorPage";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Settings } from "./pages/Settings";

const App: React.FC = () => {
  return (
    <Router basename="/todo">
      <CssBaseline />
      <FirebaseProvider>
        <Switch>
          <AuthGuard
            path="/"
            redirect="/login"
            secure
            exact
            component={Index}
          />
          <AuthGuard path="/login" redirect="/" exact component={Login} />
          <AuthGuard
            path="/settings"
            secure
            redirect="/login"
            exact
            component={Settings}
          />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </FirebaseProvider>
    </Router>
  );
};

export default App;
