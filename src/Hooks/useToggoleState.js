import {useState} from 'react'

const useToggoleState = (initialValue = false) => {
    const [value, setValue] = useState(initialValue)
    const toggole = () => {
        setValue(!value)
    }
    return[value, toggole]
}

export default useToggoleState