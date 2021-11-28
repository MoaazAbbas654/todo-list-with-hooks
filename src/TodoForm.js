import React, {useContext} from "react";  
import useInput from "./Hooks/useInput";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import {DispatchContext} from './context/todos.context'
function TodoForm () {
    const dispatch = useContext(DispatchContext)
    const [task, setTask, reset] = useInput('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'ADD', task:task})
        reset()
    }
    return(
        <Paper style={{margin:'1rem 0', badding:'0 1rem'}}>
            <form onSubmit={handleSubmit} style={{width: '100%'}}>
                <TextField  value={task} onChange={setTask} margin='none' label='Add New Todo' fullWidth />
            </form>
        </Paper>
    )
}

export default TodoForm