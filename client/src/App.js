import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div>
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route exact path="/home" component={Home} />
      //       <Route exact path="/results" component={Results} />
      //       <Route exact path="/saved" component={Saved} />
      //     </Switch>
      //   </div>
      // </Router>
      <div>
        <Home />
        {/* <Results />
        <Saved /> */}
      </div>
    );
  }
}

export default App;
