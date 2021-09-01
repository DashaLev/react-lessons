import {useDispatch} from "react-redux";
import {useState} from "react";
import './TodoItem.css'

export const TodoItem = ({item:{id,title,description}}) => {

    let dispatch = useDispatch()
    let [classNameBlock, setClassNameBlock] = useState('ds-none')
    
    const onClickAddDsBlock = () => {
        setClassNameBlock('ds-block')
    }
    const onClickAddDsNone = () => {
        setClassNameBlock('ds-none')
    }


    const onSubmit = (e) => {
        e.preventDefault()
        let title = e.target.title.value
        let description = e.target.description.value
        !title || !description ? alert('Fill in all fields') : dispatch({type:'UPDATE_TODO',payload:{id,title,description}})
    }

    return (
      <li>
          <div className={'todo-details-wrap'}>
              <div>
                  {title} <br/>
                  {description}
              </div>
              <div>
                  <button onClick={onClickAddDsBlock}>Edit</button>
                  <button onClick={() => dispatch({type:'DELETE_TODO_ITEM',payload:id})}>Delete</button>
              </div>
          </div>
          <form onSubmit={onSubmit} className={classNameBlock}>
              <input type={'text'} name={'title'} placeholder={'Edit title'} defaultValue={title}/>
              <input type={'text'} name={'description'} placeholder={'Edit description'} defaultValue={description}/>
              <input type={'submit'} value={'Save'} onClick={onClickAddDsNone}/>
          </form>
      </li>
    )
}