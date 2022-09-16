import React from 'react';

function NumberComponent({ number }) {
    console.log("Number component");
    return (
        <div>
            Number is updated : {number}
        </div>
    );
}

export default React.memo(NumberComponent);