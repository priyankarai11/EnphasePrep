import React from 'react';

function closure() {
   function outerFunction() {
     let outerFuncVar = "outside";
       function innerFunction() {
      return outerFuncVar;
     }
     return innerFunction();
   }

  let res = outerFunction()
  console.log(res)
}

export default closure;
