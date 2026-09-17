import React from "react";

const TodoList = ({ todo, delTodo, editTodo }) => {
  function handleDelTodo(id) {
    delTodo(id);
  }

function handleEditTodo(item){
   editTodo(item)
}

  return (
    <div className="text-center mt-4 w-[25%] m-auto ">
      {todo.map((item, index) => (
        <div key={index} className="flex justify-center items-center">
          <div className="w-[70%] bg-slate-300 text-start p-2">
            {item.title}
          </div>{" "}
          <div className="p-2 ">
            <button
              className="bg-green-500 text-white p-2 rounded me-2"
              onClick={() => handleEditTodo(item)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={() => handleDelTodo(item.id)}
            >
              Del
            </button>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
