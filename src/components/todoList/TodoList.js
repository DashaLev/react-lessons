import {useSelector} from "react-redux";
import {TodoItem} from "../todoItem/TodoItem";
import './TodoList.css'

export const TodoList = () => {
    let {todoList} = useSelector(state => state.todoListReducer)

    return (
          <ol>
              {
                  todoList.map((value,index) => <TodoItem key={index} item={value}/>)
              }
          </ol>
    )
}