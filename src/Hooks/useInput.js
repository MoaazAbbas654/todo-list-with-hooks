import { useState } from "react";

const useInput = (initialVal) => {
    const [val, setVal] = useState(initialVal)
    const handleChange = (e) => {
        setVal(e.target.value)
    }
    const reset = () => {
        setVal('')
    }
    return [val, handleChange, reset]
}

export default useInput