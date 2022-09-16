import React from 'react';


//async and await

// const getData = async () => {
//   let data = await "Hello world";
//   console.log(data);
// };

// console.log("Im first");
// getData();
// console.log("Im third");

function Promised() {
    const p = new Promise((resolve, reject) => {
        let a = 1;
        if (a === 2)
        {
            resolve("Equal")
        } else {
            reject("nt equal")
        }
    })
    p.then((message) => {
        console.log("Success",message)
    }).catch((message) => {
        console.log("Failure",message)
    })
}


export default Promised;