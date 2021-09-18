import "./App.css";
import { useNewTodo } from "./Hooks/useNewTodo";
import { useTodos } from "./Hooks/useTodos";
import { useShowSidebar } from './Hooks/useShowSidebar';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoActions from "./components/TodoActions";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const newTodo = useNewTodo();
  const todos = useTodos();
  const showSidebar = useShowSidebar();

  return (
    <div>
      <Navbar {...showSidebar} />
      <div className="App">
        <Sidebar {...showSidebar} />
        <div className="todoApp_inner">
          <TodoForm {...newTodo} {...todos}  />
          <TodoList {...todos} />
          <TodoActions {...todos} />
        </div>
      </div>
    </div>
  );
}

export default App;