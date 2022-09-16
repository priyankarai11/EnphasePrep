import React from 'react';

function regVSarrowFunc() {
  // ----------------------------------this can use in reg nt in arrow---------------------------------------------------
 let user = {
   name: "GFG",
   gfg1: () => {
     return `Hii ${this.name}` // no 'this' binding here //undefined
   },
   gfg2:function() {
    return `Hello ${this.name}`;// 'this' binding works here
   },
 };
 console.log(user.gfg2(), user.gfg1());
 //user.gfg2();
  // ----------------------------------arguemnt can pass in reg nt in arrow---------------------------------------------------
//       let user = {
//       show(){
//           console.log(arguments);
//       }
//   };

//   user.show(1, 2, 3);

  //   --------------ReferenceError: Cannot access 'user' before initialization
//   let user = {
//     show: () => {
//       console.log(arguments);
//     },
//   };
//   user.show(1, 2, 3);
    
    

    
    //-------------------in reg can make use of new keyword(constructible) and arrow if we try to use throws reference error ............

// let x= function (){
//     console.log(arguments);
// };
// new x(1,2,3);
  
  
  //--------------------Arrow Func: Error:Funcc is not constructor----------------
  
  // const Funcc = (name) => {
  //   console.log(name);
  // };

  // const val = new Funcc("prii");


  // function Func(name) {
  //   this.name = name;
  //   this.greet = function () {
  //     console.log(name);
  //   };
  // }

  // const val = new Func("prii");
  // val.greet();
    
}

export default regVSarrowFunc;







