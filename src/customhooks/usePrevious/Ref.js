import React, { useEffect, useRef, useState,createRef } from 'react';

import { usePrevious } from './UsePrev';
 
const RefComponent = () => {
    const [count, setCount] = useState(0);
    const previous = usePrevious(count);
    const val = useRef();

    const handleClick = () => {
        setCount(prev => prev + 1);
    }

    const focus = () => {
     return val.current="hii"
    }

  console.log(val)
   
    return (
      <div>
            hello current {count} and previous {previous}
          
        <input type="text" ref={val} />
        <button onClick={focus}>Focus</button>
        <button onClick={handleClick}>Increment</button>
      </div>
    );

    
};

export default RefComponent;