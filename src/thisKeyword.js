import React from 'react';

function ThisKeyword() {
    const Person={
        name: "a",
        array:[1,2,4],
        show() {
            this.array.forEach(function (tag) {
               console.log(this.name,tag)
           } ,this)
        }
    }
    Person.show();
}

export default ThisKeyword;