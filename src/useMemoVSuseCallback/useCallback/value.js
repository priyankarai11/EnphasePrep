import React from 'react';

function Value({ value }) {
     console.log("Value component");
    return (
        <div>
            Value is updated : {value}
        </div>
    );
}

export default React.memo(Value);