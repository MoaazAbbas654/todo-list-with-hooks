import React from 'react'
import {TodosProvider} from './context/todos.context'
import { AppBar, Grid, Paper, Toolbar, Typography } from '@mui/material'
import TodosList from './TodosList'
import TodoForm from './TodoForm'

function TodoApp () {
    
 return(
     <Paper 
    style={{
        padding:'0',
        margin:'0',
        height:'100vh',
        backgroundColor: '#fafafa'            
    }}
    elevation={0}
    >
        <AppBar color='primary' position='static' style={{height:'64px'}}>
            <Toolbar>
                <Typography color='inherit'> TODOS WITH HOOKS</Typography>
            </Toolbar>
        </AppBar>
         <Grid container justifyContent="center" style={{marginTop:'1rem'}}>
            <Grid item xs={11} md={8} lg={4}>
                <TodosProvider>
                <TodoForm/>
                <TodosList/>
                </TodosProvider>
            </Grid>
        </Grid>
     </Paper>
 )
}

export default TodoApp