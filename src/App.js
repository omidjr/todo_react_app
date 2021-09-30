import "./App.css";
import { useNewTodo } from "./Hooks/useNewTodo";
import { useTodos } from "./Hooks/useTodos";
import { useShowSidebar } from './Hooks/useShowSidebar';
import { useNewCollection } from "./Hooks/useNewCollection";
import { useCollections } from "./Hooks/useCollections";
import { useChosenCollection } from "./Hooks/useChosenCollection";
import TodoCollection from "./components/TodoCollection";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoActions from "./components/TodoActions";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const newTodo = useNewTodo();
  const todos = useTodos();
  const showSidebar = useShowSidebar();
  const newCollection = useNewCollection();
  const collections = useCollections();
  const chosenCollection = useChosenCollection();

  return (
    <div>
      <Navbar {...showSidebar} {...newTodo} {...todos} {...chosenCollection} />
      <div className="App">
        <Sidebar {...showSidebar} {...newCollection} {...collections} {...chosenCollection} />
        <div className="todoApp_inner">
          <TodoCollection {...chosenCollection} />
          {chosenCollection.chosenCollection === '' ? <div style={{display: 'none'}} />
          : 
          <>
            <TodoForm {...newTodo} {...todos} {...chosenCollection} />
            <TodoList {...todos} {...chosenCollection} />
            <TodoActions {...todos} />
          </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;