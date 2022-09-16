import React from 'react';

function Inheritance() {
    class Student{  //parent class
        constructor(name)
        {
            this.name = name;
            this.year='1998'
        }
        greet() {
            console.log("Name : ",this.name)
        }
    }
    
    class Person extends Student {
      constructor(name) {
        super(name);
        this.year = "2022";
        }
        
        //overrriding greet() from parent class
    //   greet() {
    //       console.log("Name : ", this.name);
    //        console.log("Year : ", this.year);
    //   }
    }

    const myClass = new Person("Priyanka");
    myClass.greet();
}

export default Inheritance;