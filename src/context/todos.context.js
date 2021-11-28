import {createContext} from 'react'
import reducer from '../reducer/todo.reducer';
import useLocalStorageReducer from '../Hooks/useLocalStorageState';
const TodosContext = createContext()
const DispatchContext = createContext()
const initialValue = []

function TodosProvider (props) {

    const [todos, dispatch] = useLocalStorageReducer ('todos', initialValue, reducer)
    

    return(
        <TodosContext.Provider value = {todos}>
            <DispatchContext.Provider value = {dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}

export {TodosContext, TodosProvider, DispatchContext}