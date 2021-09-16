import "./App.css";
import { useNewTodo } from "./Hooks/useNewTodo";
import { useTodos } from "./Hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoActions from "./components/TodoActions";
import Navbar from "./components/Navbar";

const App = () => {
  const newTodo = useNewTodo();
  const todos = useTodos();

  return (
    <div className="App">
      <Navbar />
      <div className="todoApp">
        <TodoForm {...newTodo} {...todos}  />
        <TodoList {...todos} />
        <TodoActions {...todos} />
      </div>
    </div>
  );
}

export default App;