/** @format */

import React, { Component } from "react";

class Snap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "priya",
    };
  }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
      document.getElementById("d1").innerHTML="Before " +prevState.item
    }


    componentDidUpdate()
    {
document.getElementById("d2").innerHTML = "After " + this.state.item;
    }

  render() {
    return (
      <div>
        name : {this.state.item}
            <button onClick={() => this.setState({ item: "sacc" })}>Click</button>
            <div id="d1" />
            <div id="d2" />
      </div>
    );
  }
}

export default Snap;
