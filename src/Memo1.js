// import React, {PureComponent } from 'react';
// import Memo2 from './Memo2';

// class componentName extends PureComponent {
//     constructor() {
//         super();
//         this.state = {
//             val:1
//         }
//     }

//     componentDidMount()
//     {
//         setInterval(() => {
//             this.setState ({
//               val:  1,
//             })
//        },2000)
      
//     }

//     render() {
//         return (
//            <Memo2 val={this.state.val} />
//         );
//     }
// }

// export default componentName;


import React, { useState } from 'react';
import './App.css'

const Memo1 = () => {
    const [show, setShow] = useState(true);
    return (
      <>
        <div className={show ? "a1" : "a2"}>Priii</div>
        <button onClick={() => setShow(!show)}>Change bg </button>
      </>
    );
};

export default Memo1;