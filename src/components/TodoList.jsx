import "./TodoList.css";
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
        <div className="todoList">
            <ul>
                {todos.map((todo, index) => (
                    <li className="todo" key={todo.id}>
                        <div className="todoCheck">
                            <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={todoDone(todo, index)}
                            />
                        </div>
                        <div className="todoNameAndActions">
                            <p className={todo.done ? 'done' : ''}>{todo.content}</p>
                            <button onClick={removeTodo(todo)}>Remove Todo</button>
                        </div>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
