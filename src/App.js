import { useCallback, useState, useEffect } from "react";

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

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

  useEffect(() => {
    console.log(todos);
  }, [todos]);

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

  const markAllDone = useCallback(() => {
    const updatedTodos = todos.map(todo => {
      return {
        ...todo,
        done: true,
      };
    });
    setTodos(updatedTodos);
  }, [todos]);

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
      <button onClick={markAllDone}>Mark all done</button>
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
  );
}

export default App;
