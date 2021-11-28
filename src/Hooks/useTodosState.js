import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';
const useTodoState = (initialTodos) => {
    const [todos, setTodos] = useLocalStorageState('todos',initialTodos)
    return {
        todos,
        addTodo: (newTodoText) => {
            setTodos([...todos, {id: uuidv4(), task: newTodoText, completed:false}])
        },
        deleteTodo: (id) => {
            setTodos(todos.filter(todo => todo.id !== id))
        },
        toggoleCompleted: (id) => {
            const updatedTodos = todos.map(todo => 
                todo.id === id ? {...todo, completed:!todo.completed}:todo
                )
            setTodos(updatedTodos)
        },
        updateTodo: (id, updatedTask) => {
            const updatedTodos = todos.map(todo => 
                todo.id === id? {...todo, task: updatedTask}: todo
            )
                setTodos(updatedTodos)
        }
        
    }
}

export default useTodoState
