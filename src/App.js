import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Platform from "./pages/Platform";
import Investors from "./pages/Investors";
import Issuers from "./pages/Issuers";
import About from "./pages/About";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
        <Router>
          <Header/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/platform" exact component={Platform} />
                    <Route path="/investors" exact component={Investors} />
                    <Route path="/issuers" exact component={Issuers} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/*" exact component={Home} />
                </Switch>
            <Footer/>
        </Router>
    );
  }
}

export default App;
