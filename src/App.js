import "./App.css";
import { useNewTodo } from "./Hooks/useNewTodo";
import { useTodos } from "./Hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoActions from "./components/TodoActions";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const newTodo = useNewTodo();
  const todos = useTodos();

  return (
    <div>
      <Navbar />
      <div className="App">
        <Sidebar />
        <div className="todoApp">
          <div className="todoApp_inner">
            <TodoForm {...newTodo} {...todos}  />
            <TodoList {...todos} />
            <TodoActions {...todos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;