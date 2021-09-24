import "./TodoForm.css";
import {React, useCallback} from 'react'

const TodoForm = ({newTodo, setNewTodo, todos, setTodos, chosenCollection}) => {
    const onNewTodoChange = useCallback((e) => {
        setNewTodo(e.target.value);
    }, []);

    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!newTodo.trim()) return; //Avoid empty todos
        setTodos([
        {
            id: todos.length ? todos[0].id + 1 : 1,
            content: newTodo,
            done: false,
            collection: chosenCollection
        },
        ...todos
        ]);
        setNewTodo('');
    }, [newTodo, todos]);

    return (
        <div>
            <form className="addTodo_form" onSubmit={formSubmitted}>
                <input
                    className="addTodo_input"
                    autoComplete="off"
                    placeholder="Add a Todo..."
                    id="newTodo"
                    name="newTodo"
                    value={newTodo}
                    onChange={onNewTodoChange}
                />
                <button className="addTodo_btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1V17" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 9H17" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default TodoForm