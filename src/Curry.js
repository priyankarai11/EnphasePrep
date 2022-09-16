import React from 'react';

function Curry() {
    
    function Cur(f) {
        return function (a)
        {
            return function (b)
            {
                return f(a, b);
            }
        }
    }

    function sum(a, b) {
       return a + b;
    }

    let res = Cur(sum);
     return(res(1)(2));
}

export default Curry;