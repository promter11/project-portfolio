import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

const Routes = ({ language }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home language={language} />
      </Route>
      <Route path="/about">
        <About language={language} />
      </Route>
      <Route path="/skills">
        <Skills language={language} />
      </Route>
      <Route path="/portfolio">
        <Portfolio language={language} />
      </Route>
      <Route path="/contact">
        <Contact language={language} />
      </Route>
      <Route path="*">
        <NoMatch language={language} />
      </Route>
    </Switch>
  );
};

export default Routes;
