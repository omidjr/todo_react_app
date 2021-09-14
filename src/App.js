import { useNewTodo } from "./Hooks/useNewTodo";
import { useTodos } from "./Hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoActions from "./components/TodoActions";

const App = () => {
  const newTodo = useNewTodo();
  const todos = useTodos();

  return (
    <>
      <TodoForm {...newTodo} {...todos}  />
      <TodoList {...todos} />
      <TodoActions {...todos} />
    </>
  );
}

export default App;