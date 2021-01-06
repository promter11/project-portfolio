import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Routes;
