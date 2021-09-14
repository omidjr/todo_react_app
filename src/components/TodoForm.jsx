import {React, useCallback} from 'react'

const TodoForm = ({newTodo, setNewTodo, todos, setTodos}) => {
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
            done: false
        },
        ...todos
        ]);
        setNewTodo('');
        }, [newTodo, todos]);

    return (
        <div>
            <form onSubmit={formSubmitted}>
                <label htmlFor="newTodo">Enter a Todo:</label>
                <input
                    id="newTodo"
                    name="newTodo"
                    value={newTodo}
                    onChange={onNewTodoChange}
                />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm
