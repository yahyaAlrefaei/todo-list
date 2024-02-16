import React from "react"
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Todo = ({todo, toggleCompleted, deleteTodo, editTodo}) => {
    return(
        <div className="Todo">
            <p onClick={() => toggleCompleted(todo.id)} className={`${todo.completed ? 'completed': ""}`}>{todo.task}</p>
            <div>
                <span onClick={() => editTodo(todo.id)}><EditNoteIcon /></span>
                <span onClick={() => deleteTodo(todo.id)}><DeleteOutlineIcon /></span>
            </div>
        </div>
    )
}

export default Todo