import React, {useState} from "react";

const TodoForm = ({addTask}) => {

    const [task, setTask] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTask(task)
        setTask("")
    }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button disabled={!task} type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
