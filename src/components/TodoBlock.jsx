import React from 'react'
import { deleteTodo } from '../services/actions'
import { useSelector, useDispatch } from 'react-redux'
const TodoBlock = () => {

  const dispatch = useDispatch();
  const list = useSelector((state) => state.reducer.list)
  // console.log(list)
  return (

    <div className="showItems">
      {
        list.map((item) => {
          return (
            <div className="eachItem" key={item.id}>
              <h3>{item.data}</h3>
              <i className="fa fa-trash-alt add-btn" title='Delete Item' onClick={() => dispatch(deleteTodo(item.id))}></i>
            </div>
          )
        })
      }
    </div>

  )
}

export default TodoBlock