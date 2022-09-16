import React from 'react';

function ThirdSmallNumber() {
    // let a = [2, 8, 4, 1, 7];
    // let smallest = Math.min(...a)
    // return smallest

    //.............................................
    // let MAX = 1000;
    // const thirdSmallest = (arr) => {
    //     let first = MAX, second = MAX, third = MAX;
    //     for (let i = 0; i < arr.length; i++)
    //     {
    //         if (arr[i] < first) {
    //           third = second;
    //           second = first;
    //           first = arr[i];
    //         } else if (arr[i] < second) {
    //             third = second;
    //             second=arr[i]
    //         }
    //         else if (arr[i] < third) {
    //           third = arr[i];
    //         }
    //     }
    //     console.log(third)
       
    // }
    // let a = [12, 18, 3,14, 1, 7];
    // thirdSmallest(a);

   // ..........................................................

    const arr = [6, 7, 3,1.5, 8, 2, 9, 4, 5];
const thirdSmallest = () => {
   for(let i = 0; i < 2; i++){
      const minIndex = arr.indexOf(Math.min(...arr));
       arr.splice(minIndex, 1);
       console.log(arr)
    };
    console.log(Math.min(...arr));
};
console.log(thirdSmallest(arr));
}

export default ThirdSmallNumber;