import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const Addtodo = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    dispatch(addTodo({ text: inputText }));
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default Addtodo;
