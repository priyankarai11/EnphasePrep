/** @format */

import React, { Component, PureComponent } from "react";
import "./App.css";
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 20,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: 20 });
    }, 2000);
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <p>Count {this.state.count}</p>
        {/* <button
          onClick={() => {
            this.setState({ count: 20 });
          }}
        >
          Update
        </button> */}
      </div>
    );
  }
}
export default App;
