import React, { Component } from 'react';

class Parnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "sac",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props.name)
    return { item: props.name };
  }

  render() {
    console.log("render updatefunction")
      return <div>name : {this.state.item}
          <button onClick={()=>this.setState({item:"sacc"})}>Click</button>
      </div>;
  }
}

export default Parnt;