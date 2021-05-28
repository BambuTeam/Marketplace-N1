import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import { Home } from "./Pages/Home";





import Process from "./Pages/Process";


import Portfolio3col from "./Pages/Portfolio-3col";


import Bloglist from "./Pages/Bloglist";

import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";





import homeSoftwareDark from "./Pages/Home-software-dark";
import HomeAppShowcase from "./Pages/Home-app-showcase";

import HomeTracking from "./Pages/Home-tracking";
import HomeEvent from "./Pages/Home-event";





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



          <ScrollToTopRoute path="/Process" component={Process} />


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


          
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
