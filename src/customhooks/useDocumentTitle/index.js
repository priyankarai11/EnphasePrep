import React, { useState } from 'react';
import UseDocumentTitle from './useDocumentTitle';

function DocumentTitle() {
    const [count, setCount] = useState(0)
    const head=UseDocumentTitle(count)
    return (
        <div>
            <h1>Count - { head}</h1>
            <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>  
        </div>
    );
}

export default DocumentTitle;