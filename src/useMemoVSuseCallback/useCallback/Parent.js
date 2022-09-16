import React, { useCallback,useMemo,useState } from 'react';
import UseCallbackFunction from "./Child";
import NumberComponent from './number';
import Value from './value';


const Button = React.memo(({ handleClick ,children}) => {
  console.log("Rendered ", children,"button component")
  return (
    <button onClick={handleClick}>{children}</button>
  )
})
const UseCallback1 = () => {
    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(0);

  //   const ValueIncrement = useCallback(() => {
  //     setValue(value + 100);
  //   },[value]);
  
  // const NumberIncrement = useCallback(() => {
  //   setNumber(number + 1000);
  // },[number]);

  //   return (
  //     <div>
  //       <Value value={value} />
  //       <UseCallbackFunction increment={ValueIncrement}>
  //         Value
  //       </UseCallbackFunction>
  //       <NumberComponent number={number} />
  //       <UseCallbackFunction increment={NumberIncrement}>
  //         Number
  //       </UseCallbackFunction>
  //     </div>
  //   );

  const Numberincrement = useCallback(() => {
    setNumber(number+1)
  },[number]);

  const Valueincrement = useCallback(() => {
    setValue(value+1);
  },[value]);

  return (
    <>
      Number : {number} { "   "}
      Value ={value}
      <Button handleClick={Numberincrement}>Number</Button>
      <Button handleClick={Valueincrement}>Value</Button>
    </>
  );
};

export default UseCallback1;