import React, { Component } from 'react'
import App from "./HOC"

 class Enhanced extends Component {
    render() {
        const { handleClick, count } = this.props;
    return (
        <button onClick={handleClick}>{count }</button>
    )
  }
}
export default App(Enhanced);
