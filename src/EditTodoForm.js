import React, {useContext} from "react";
import { DispatchContext } from "./context/todos.context";
import { TextField } from "@mui/material";
import useInput from './Hooks/useInput'

function EditTodoForm ({task, id, toggoleEdit}) {
    const dispatch = useContext(DispatchContext)
    const [value, handleChange, reset] = useInput(task)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'UPDATE' ,id: id, newTask: value})
        reset()
        toggoleEdit()
    }
    return(
        <form onSubmit={handleSubmit} style={{marginLeft: '1rem', width:'50%'}}>
            <TextField variant='standard' value={value} onChange={handleChange} autoFocus fullWidth   />
        </form>
    )
}

export default EditTodoForm