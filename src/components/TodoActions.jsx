import "./TodoActions.css";
import {React, useCallback} from 'react'

const TodoActions = ({todos, setTodos}) => {
    const markAllDone = useCallback(() => {
        const updatedTodos = todos.map(todo => {
            return {
                ...todo,
                done: true,
            };
        });
        setTodos(updatedTodos);
        }, [todos]);
        
        const deleteAllTodos = useCallback(() => {
            setTodos([])
        },
        [todos]);

    return (
        <div className='todoActions'>
            <button className='todoActions_done' onClick={markAllDone}>Mark all done</button>
            <button className='todoActions_delete' onClick={deleteAllTodos}>Delete all Todos</button>
        </div>
    )
}

export default TodoActions
