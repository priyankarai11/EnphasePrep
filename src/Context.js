import React, { useState, useContext, createContext } from "react";
import Component1 from "./comp1";
import { UserProvider } from "./ContextParent";

const Context = () => {
  
    const [value, setValue] = useState(10);
  return (
    //commented bcz to get the default value
    <UserProvider value="prii">
      <Component1 />
      {" "}
    </UserProvider>
  );


    // function Comp1() {
    //     return <Comp2 />
    // }

    // function Comp2() {
    //     return <Comp3 />;
    // }

    // function Comp3() {
    //     const val = useContext(user);
    //     return <div>hello gt value {val}</div>
    // }
}

export default Context;


