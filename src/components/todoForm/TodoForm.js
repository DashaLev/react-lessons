import {useDispatch, useSelector} from "react-redux";
import './TodoForm.css'

export const TodoForm = () => {


    let todoItem = useSelector(state => state.todoItemReducer)
    let dispatch = useDispatch()


    const onChangeSaveTitle = (e) => {
        dispatch({type:'ADD_TITLE', payload:e.target.value})
    }
    const onChangeSaveDescription = (e) => {
        dispatch({type:'ADD_DESCRIPTION', payload:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        !todoItem.title || !todoItem.description ? alert('Fill in all fields') : dispatch({type:'ADD_TODO_ITEM', payload:todoItem})
        e.target.title.value = ''
        e.target.description.value = ''
        dispatch({type:'CLEAR_ITEM'})
    }


    return (
       <>
          <form onSubmit={onSubmit} className={'add-todo-wrap'}>
              <input type={'text'} name={'title'} placeholder={'Enter todo title'} onChange={onChangeSaveTitle} />
              <input type={'text'} name={'description'} placeholder={'Enter todo description'} onChange={onChangeSaveDescription}/>
              <input type={'submit'} value={'Save todo'}/>
          </form>
       </>
   )
}