import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { Restaurant } from "@material-ui/icons";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import { FirebaseProvider } from "./context/FirebaseProvider";
import { ErrorPage } from "./pages/ErrorPage";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";

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
          <Route path="/" component={ErrorPage} />
        </Switch>
      </FirebaseProvider>
    </Router>
  );
};

export default App;
