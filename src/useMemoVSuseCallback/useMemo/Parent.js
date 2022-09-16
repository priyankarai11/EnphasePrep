import React ,{useCallback, useMemo, useState} from 'react';
import UseMemo from './Child';


function UseMemo2() {
    const [number, setNumber] = useState(0);
     const [value, setValue] = useState(100);
    
    // const Increment = useMemo(() => {
    //          setValue(100+value);
       
    // }, [value])
  
   const Increment =() => {
     setValue(i=>i+1);
   };

    return (
      <div>
        <div>Value: {value}</div>
        <button onClick={Increment}>Click</button>
        <UseMemo number={number} />
      </div>
    );
}

export default UseMemo2;