import React, {useContext, memo} from "react";
import {DispatchContext}  from "./context/todos.context";
import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggoleState from './Hooks/useToggoleState'
import EditTodoForm from "./EditTodoForm";

function Todo ({task, completed, id}) {
    const  dispatch  = useContext(DispatchContext)
    const [edit, toggoleEdit] = useToggoleState()
    const handleDelete = () => {
        dispatch({type:'REMOVE',id: id})
    }
    const handleToggole = () => {
        dispatch({type:'TOGGOLE',id: id})
    }

    const handleEdit = () => {
        toggoleEdit(edit)
    }
    console.log(task, 'rendering')
    return(
        edit? 
        <>  <ListItem style={{height:'64px'}}>
            <EditTodoForm task = {task}  id={id} toggoleEdit={toggoleEdit} />
            <ListItemSecondaryAction>
            <IconButton onClick={handleEdit}>
                    <EditIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        
        </>
             :

        <>
        <ListItem>
            <Checkbox checked={completed} tabIndex={-1} onClick={handleToggole}/>
                <ListItemText style={{textDecoration: completed? 'line-through': 'none'}}>
                    {task}
                </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={handleEdit}>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </>
    )
}


export default memo (Todo)