import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../services/actions';

const AddTodo = (props) => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch()

    // console.log(props)
    return (
        <div className="addItems">
            <input type="text" name="addItem"
                placeholder='Add Item' id=""
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(todo), setTodo(""))}></i>
        </div>
    )
}

export default AddTodo