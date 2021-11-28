import React, {useContext} from "react";
import { TodosContext } from "./context/todos.context";
import { List,  Paper } from "@mui/material";
import Todo from "./Todo";
import {Divider} from "@mui/material";

function TodosList () {
    const todos = useContext(TodosContext)
    if(todos.length)
    return(
        <Paper>
            <List>
                {todos.map((todo, i) => (
                     <div key={todo.id} style={{height: '64px '}}>
                        <Todo {...todo}/>
                        {i < todos.length -1 ? <Divider /> : null}
                     </div>
                ))}
            </List>
        </Paper>
    )
    return null
}

export default TodosList