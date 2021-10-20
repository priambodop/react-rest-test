import React, { PureComponent } from "react";
import "./App.css";
import Containers from "./containers/containers";

class App extends PureComponent {
  render() {
    return (
      <div className='App'>
        <Containers />
      </div>
    );
  }
}

export default App;
