import React from 'react'
import AddTodo from './components/AddTodo'
import TodoBlock from './components/TodoBlock'
import { removeTodo } from './services/actions'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="child-div">
        <h1 className='fa' style={{ padding: 20 }}>TODO App</h1>

        <figure>
          <figcaption>Add your list here</figcaption>
        </figure>

        <AddTodo />
        <TodoBlock />

        <div>
          <button className='btn effect04' data-sm-link-text="remove All" onClick={() => dispatch(removeTodo())}><span>Check All</span></button>
        </div>

      </div>
    </div>
  )
}
export default App