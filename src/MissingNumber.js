import React from 'react';

function MissingNumber() {
    let a=[1,2,4,5]
    for (let i = 1; i < 100; i++)
    {
        if (i !== a[i - 1])
        {
            console.log(i)
             i = 100;
            }
        }
}

export default MissingNumber;