import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import { Home } from "./Pages/Home";



import About from "./Pages/About";

import Process from "./Pages/Process";
import Team from "./Pages/Team";

import Portfolio3col from "./Pages/Portfolio-3col";


import Bloglist from "./Pages/Bloglist";

import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";





import homeSoftwareDark from "./Pages/Home-software-dark";
import HomeAppShowcase from "./Pages/Home-app-showcase";

import HomeTracking from "./Pages/Home-tracking";
import HomeEvent from "./Pages/Home-event";

import Price from "./Pages/Price";
import Faq from "./Pages/Faq";

import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

import NotFound from "./Pages/404";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />


          <ScrollToTopRoute path="/About" component={About} />

          <ScrollToTopRoute path="/Process" component={Process} />
          <ScrollToTopRoute path="/Team" component={Team} />

          <ScrollToTopRoute path="/Portfolio-3col" component={Portfolio3col} />
          <ScrollToTopRoute path="/Bloglist" component={Bloglist} />
          <ScrollToTopRoute path="/Contact" component={Contact} />





          <ScrollToTopRoute
            path="/HomeAppShowcase"
            component={HomeAppShowcase}
          />
          <ScrollToTopRoute
            path="/Home-software-dark"
            component={homeSoftwareDark}
          />
          <ScrollToTopRoute path="/Home-Tracking" component={HomeTracking} />
          <ScrollToTopRoute path="/Home-event" component={HomeEvent} />

          <ScrollToTopRoute path="/Price" component={Price} />
          <ScrollToTopRoute path="/Faq" component={Faq} />

          <ScrollToTopRoute path="/SignIn" component={SignIn} />
          <ScrollToTopRoute path="/SignUp" component={SignUp} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
