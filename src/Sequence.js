import React from 'react';

function Sequence() {
    const Seq = (arr) => {
        // let diff = arr[0];
        // for (let i = 0; i < arr.length; i++)
        // {
        //     if (diff != arr[i] - i) {
        //       while (diff < arr[i] - i) {
        //         console.log(i + diff);
        //         diff++;
        //       }
        //     }
        // }


       let  max = arr[0];
       let  min = arr[0];
        let d;
        let x = 0;
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[i] > max)
            {
                max=arr[i]
            }
            if (arr[i] < min)
            {
                min=arr[i]
            }
        }

        d = parseInt((max - min) / arr.length, 10);

        for (let i = 0; i < arr.length; i++)
        {
            x = x ^ arr[i];
        }

        for (let i = 0; i <= arr.length; i++) {
          x = x ^ (min+(d*i));
        }
     return x
       
    }



    let arr = [24,12,8,4];
   console.log( Seq(arr))
}

export default Sequence;