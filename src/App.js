import {TodoForm} from "./components/todoForm/TodoForm";
import {TodoList} from "./components/todoList/TodoList";
import './App.css'

function App() {
  return (
    <div className={'wrap'}>
        <TodoForm/>
        <TodoList/>
    </div>
  );
}

export default App;
