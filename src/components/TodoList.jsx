import {React, useCallback} from 'react'

const TodoList = ({todos, setTodos}) => {
    const todoDone = useCallback((todo, index) => (e) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        setTodos(newTodos);
        }, [todos]);
        
        const removeTodo = useCallback((todo) => (e) => {
            setTodos(todos.filter(otherTodo => otherTodo !== todo))
        }, [todos]);

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                    <div>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={todoDone(todo, index)}
                    />
                    <p className={todo.done ? 'done' : ''}>{todo.content}</p>
                    </div>
                    <button onClick={removeTodo(todo)}>Remove Todo</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
