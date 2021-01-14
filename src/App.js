import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { AuthProvider } from "./components/Contexts/AuthContext";
import PrivateRoute from "./pages/PrivateRoute";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" component={Home} />
            {/* <PrivateRoute exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} /> */}
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
