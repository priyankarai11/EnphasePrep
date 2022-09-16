import React from 'react';

function Child({ changeTitle }) {

  return (
    <div>
      
      {/* Received from Parent :{name} */}
      <button onClick={()=>changeTitle("sac")}>Click Me</button>
    </div>
  );
}

export default Child;
