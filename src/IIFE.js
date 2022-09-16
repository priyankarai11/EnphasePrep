import React from 'react';

function IIFE() {

    //Immediately Invoked Function Expression
    let s = (function (a, b) {
      return a + b;
    })(10, 20);

    console.log(s)
}

export default IIFE;