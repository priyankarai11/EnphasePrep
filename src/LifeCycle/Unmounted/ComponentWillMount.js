import React, { Component } from 'react';

class WillMount extends Component {
    constructor() {
      super();
      this.state = {
        message: "This is initial message",
      };
    }

    componentWillMount() {
     console.log("Component will mount")
    }

  render() {
      console.log("Render function")
      return (
        <div>
          <h3> {this.state.message} </h3>
        </div>
      );
    }
//   constructor(props) {
//     super(props);
//     this.state = { show: true };
//   }
//   delHeader = () => {
//     this.setState({ show: false });
//   };
//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;
//     }
//     return (
//       <div>
//         {myheader}
//         <button type="button" onClick={this.delHeader}>
//           Delete Header
//         </button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The component named Header is about to be unmounted.");
//   }
//   render() {
//     return <h1>Hello World!</h1>;
//   }
}

export default WillMount;