import { useMemo } from "react";
import React from 'react';

function Memo2 ({ val }) {
    console.log(val)
    return (
        <div>
            {val}
        </div>
    );
}

export default React.memo(Memo2);