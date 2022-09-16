/** @format */

import { useEffect,useRef } from "react";


export const usePrevious = (val) => {
    const myref = useRef();
    useEffect(() => {
        myref.current = val;
    }, [val])
    return myref.current
};
