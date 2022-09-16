/** @format */

import React, { Component,PureComponent } from "react";

class Parnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "sac",
    };
  }

    shouldComponentUpdate()
    {
        return true;
    }

  render() {
    console.log("render")
    return (
      <div>
        name : {this.state.item}
        <button onClick={() => this.setState({ item: "sacc" })}>Click</button>
      </div>
    );
  }
}

export default Parnt;
