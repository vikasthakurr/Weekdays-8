import React from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const todos = useSelector((state) => state.todo);
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.id}</li>
          // <li key={todo.id}>{todo.i</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
