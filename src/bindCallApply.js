import React from 'react';

function BindCallApply() {
  // const p1 = {   //bind
  //     name: "prii",
  //     yr:"1998",
  // }

  // const p2 = {
  //     name: "priya",
  //     yr:"2022",
  // }

  // function greet()
  // {
  //     console.log("Name", this.name)
  //     console.log("Year", this.yr);
  // }

  // const g = greet.bind(p2)
  // g();

  function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
  }

  function setBrand(brand) {
    Car.call(this, "convertible", "petrol");
   this.brand = brand;
    console.log(`Car details = `, this);
  }

  function definePrice(price) {
    Car.call(this, "convertible", "diesel");
    this.price = price;
    console.log(`Car details = `, this);
  }

  const newBrand = new setBrand("Brand1");
  const newCarPrice = new definePrice(100000);

  
  // console.log(newBrand,newCarPrice)

  //  .....................................................

  //  const p1 = {
  //    //call
  //    name: "prii",
  //    yr: "1998",
  //  };

  //  const p2 = {
  //    name: "priya",
  //    yr: "2022",
  //  };

  //  function greet() {
  //    console.log("Name", this.name);
  //    console.log("Year", this.yr);
  //  }

  //  greet.call(p2);

  //  ........................................................

//   const p1 = {
//     //apply
//     name: "prii",
//     yr: "1998",
//   };

//   const p2 = {
//     name: "priya",
//     yr: "2022",
//   };

//     function greet(greet, lang) {
//       console.log(greet,lang)
//       console.log("Name", this.name);
//       console.log("Year", this.yr);
//   }

//   greet.apply(p2,["hi","english"]);
  
 }

export default BindCallApply;