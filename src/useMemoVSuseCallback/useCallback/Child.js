/** @format */

import React from "react";

const UseCallbackFunction = ({ increment, children }) => {
  console.log("Rendering click", children)
  return <button onClick={increment}>{children}</button>;
};

export default React.memo(UseCallbackFunction);
