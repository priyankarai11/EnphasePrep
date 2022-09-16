import { useState } from "react"

export const useCounter = (intialValue,value) => {
    const [count, setCount] = useState(intialValue);

    const increment = () => {
        setCount(prev=>prev+value)
    }
return [count,increment]
}