import React, {useState} from "react";

const EditTodoForm = ({editTodo, data}) => {

    const [task, setTask] = useState(data.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(data.id, task)
        setTask("")
    }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="update task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button disabled={!task} type="submit" className="todo-btn">
        update Task
      </button>
    </form>
  );
};

export default EditTodoForm