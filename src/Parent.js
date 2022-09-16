import React,{useState} from 'react';
import Child from './Child';

function Parent() {
    const [name, setName] = useState("Prii");

    const changeName = val =>
    {
        setName(val)
    }

    return (
        <div>
            {name}  
            <Child changeTitle={changeName} name={name} />
        </div>
    );
}

export default Parent;