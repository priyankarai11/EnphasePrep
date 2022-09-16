import React from 'react';
import { useCounter } from './useCounter';

function UseCount() {
    const [count, increment] = useCounter(10,50);
    return (
        <div>
            count - {count} 
            <button onClick={increment}>Click</button>
        </div>
    );
}

export default UseCount;