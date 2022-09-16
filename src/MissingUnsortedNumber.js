import React from 'react';

function MissingUnsortedNumber() {
    function findMissingNumbers(arr) {
      let res = arr.reduce((res, i) => ((res[i] = 1), res), []);
      return [...res.keys()].filter((i) => i%4===0 && !res[i]);
    }

    var someArr = [2, 1, 9, 5, 4];
    var result = findMissingNumbers(someArr);
    console.log(result);
}

export default MissingUnsortedNumber;


// function findMissingNumbers(arr) {
//   let res = arr.reduce((res, i) => ((res[i] = 1), res), []);
//   return [...res.keys()].filter((i) => i > 1 && i % 4 === 0 && !res[i]);
// }

// var someArr = [20, 12, 8, 4, 32];
// var result = findMissingNumbers(someArr);
// console.log(result);

//"Find the missing number in the sequence 
// without using any library.
// ie: Input->[2,1,9,5,4] Output->3,6,7,8
// Input->[20,12,8,4] Output-> 16"

// function findArray(a){
//  let diff=a[0]-0, res=[]
//  for(let i=0;i<a.length;i++)
//  {
//      if(a[i]-i !==diff)
//      {
//          while(diff<a[i]-i)
//          {
//              res.push(i+diff)
//               diff++
//          }
        
//      }
     
//  }
//  console.log(res)
// }

// let arr=[1,2,5,9]
// findArray(arr)