import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [val, setVal] = useState("");

  function handleTodo() {
    addTodo(val);
    setVal("");
  }
  return (
    <div className="text-center mt-4">
      <input
        className="border bg-gray-200 p-3 me-2 w-64"
        type="text"
        value={val}
        placeholder="Enter task"
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleTodo();
          }
        }}
      />
      <button
        onClick={handleTodo}
        className="p-2 text-white rounded text-xl bg-green-500 border"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
