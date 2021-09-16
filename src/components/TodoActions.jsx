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
            <div className={todos.length !== 0 ? 'todoActions_done' : 'todoActions_done_disabled'} onClick={markAllDone}>Mark all done</div>
            <div className={todos.length !== 0 ? 'todoActions_delete' : 'todoActions_delete_disabled'} onClick={deleteAllTodos}>Delete all Todos</div>
        </div>
    )
}

export default TodoActions
