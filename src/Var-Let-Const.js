import React from 'react';

function VarLetConst() {
  //......................var................................   //global scope or function scope
  // function value() {
  //     var a = 10;
  //     console.log("Inside=",a) //10
  // }
  //  console.log("Outside=", a);// a nt defined
  // value();
  //.............................let.............................
    // let a = 12;
    // a=126
    function value() {
   
      let a = 10;
      
      console.log("Inside=",a) //10
    }

 // console.log("Outside=", a);// a nt defined
  value();
}

export default VarLetConst;