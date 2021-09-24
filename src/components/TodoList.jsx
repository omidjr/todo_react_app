import "./TodoList.css";
import {React, useCallback} from 'react'

const TodoList = ({todos, setTodos, chosenCollection}) => {
    const todoDone = useCallback((todo, index) => (e) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        setTodos(newTodos);
    }, [todos]);

    const editTodo = useCallback((todo) => (e) => {
        console.log(todo);
    })

    const removeTodo = useCallback((todo) => (e) => {
        setTodos(todos.filter(otherTodo => otherTodo !== todo));
    }, [todos]);

    return (
        <div className="todoList">
            <ul>
                {todos.map((todo, index) => 
                    {return todo.collection === chosenCollection ? (
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
                            <div>
                                <span onClick={editTodo(todo)}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 17.416V22H4.58397L18.1097 8.47423L13.5258 3.89026L0 17.416ZM21.6425 4.94152C22.1192 4.46479 22.1192 3.68857 21.6425 3.21184L18.7882 0.35755C18.3114 -0.119183 17.5352 -0.119183 17.0585 0.35755L14.8215 2.59453L19.4055 7.1785L21.6425 4.94152Z" fill="#E94560"/>
                                    </svg>
                                </span>
                                <span onClick={removeTodo(todo)}>
                                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.59 8.03348H3.41005C2.75005 8.03348 2.20005 8.53348 2.31005 9.13348L4.07005 22.2335C4.18005 23.2335 5.17005 23.9335 6.27005 23.9335H15.62C16.72 23.9335 17.71 23.2335 17.82 22.2335L19.58 9.13348C19.69 8.53348 19.25 8.03348 18.59 8.03348Z" fill="#E94560"/>
                                    <path d="M19.8 2H14.3C14.3 0.9 13.31 0 12.1 0H9.9C8.69 0 7.7 0.9 7.7 2H2.2C0.99 2 0 2.9 0 4V5C0 5.6 0.44 6 1.1 6H20.9C21.56 6 22 5.6 22 5V4C22 2.9 21.01 2 19.8 2Z" fill="#E94560"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </li>
                    ) : (
                        <li style={{display: 'none'}} />
                    )}
                    
                )}
            </ul>
        </div>
    )
}

export default TodoList
