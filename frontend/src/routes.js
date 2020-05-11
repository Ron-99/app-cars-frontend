import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Header from './components/Header';
import Main from './pages/main';
import Vehicle from './pages/vehicle';
import Create from './pages/create';
import Login from './pages/login';
import SignUp from './pages/signUp';
import NotFound from './pages/notFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/home" component={Main} />
            <PrivateRoute path="/vehicle/:id" component={Vehicle} />
            <PrivateRoute path="/create" component={Create} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;