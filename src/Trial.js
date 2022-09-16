import React, { useState } from 'react';


const arr = [
  {
    id: 1,
    name: "prii",
    place: "puttur",
  },
  {
    id: 2,
    name: "sachin",
    place: "mangalore",
  },
  {
    id: 3,
    name: "sacc",
    place: "mnglr",
  },
];
function Trial() {
    const [value,setValue]=useState(arr)

    const change = {
      //boxShadow: "10px 10px 10px 10px",
      width: "40%",
      // border: "5px solid black",
      padding: "40px",
      boxShadow: " 0 0px 6px rgba(0,0,0,0.2) ",
    };

    const handleDelete = (id) => {
       const newarr= value.filter((ele) => ele.id !== id);
        setValue(newarr)
    }

    console.log(value)
    return (
      <div>
        {value.map((ele) => (
          <ul style={change} key={ele.id}>
            <li>{ele.name}</li>
            <li>{ele.place}</li>
            <button onClick={()=>handleDelete(ele.id)}>Remove</button>
          </ul>
        ))}
      </div>
    );
}

export default Trial;