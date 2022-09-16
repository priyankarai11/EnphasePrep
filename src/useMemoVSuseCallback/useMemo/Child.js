import React  from 'react';

const UseMemo = ({ number }) => {
    console.log("Child is here")
    return (
        <div>
          Number:  {number}
        </div>
    );
};

export default React.memo(UseMemo);