import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, editing: false },
    ]);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };

  const editTask = (id, task) => {
    console.log(task);
    console.log(id);

    setTodos(
      todos.map((item) =>
        item.id === id
          ? { ...item, task, editing: !item.editing }
          : item
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTask={addTodo} />
      {todos.map((item, index) =>
        item.editing ? (
          <EditTodoForm editTodo={editTask} data={item} />
        ) : (
          <Todo
            todo={item}
            key={index}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
