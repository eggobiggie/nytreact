import React, { Component } from 'react';
import Home from "./pages/Home";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Saved />
      </div>
    );
  }
}

export default App;
