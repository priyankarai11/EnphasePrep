import React from 'react';

function Sort() {
    const Sort = (arr) => {
        for (let i = 0; i < arr.length; i++){
            for (let j = i + 1; j < arr.length; j++)
            {
                if (arr[i] > arr[j])
                {
                    let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j]=temp
                }
            }
          
        }
        return arr
    }
    let arr = [3, 2, 5, 1, 7, 4, 1.6,6];
   console.log(Sort(arr)); 
}

export default Sort;