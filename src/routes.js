import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/skills",
    Component: Skills,
  },
  {
    path: "/portfolio",
    Component: Portfolio,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "*",
    Component: NoMatch,
  },
];

const Routes = ({ language }) => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={1000} classNames="fade">
            <Switch location={location}>
              {routes.map(({ path, Component }, index) => (
                <Route
                  key={index}
                  path={path}
                  exact
                  render={() => <Component language={language} />}
                />
              ))}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default Routes;
