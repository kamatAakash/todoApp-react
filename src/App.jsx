import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import DeleteModal from "./components/DeleteModal";
import UpdateModal from "./components/UpdateModal";

const App = () => {
  // const[todo, setTodo]=useState([])
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [delModal, setDelModal] = useState(false);
  const [todoToDel, setTodoToDel] = useState(null);

  const [editModal, setEditModal] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  function addTodo(val) {
    val = val.trim();

    if (val === "") {
      alert("Please enter a Todo");
      return;
    }
    const exist = todo.find((item) => item.title === val);
    if (exist) {
      alert("Todo already exists");
      return;
    }

    setTodo([...todo, { title: val, id: Date.now() }]);
  }

  // Delete

  function handleDelModal(id) {
    setDelModal(true);
    setTodoToDel(id);
  }

  function cancelDel() {
    setDelModal(false);
    setTodoToDel(null);
  }

  function ConfirmDel() {
    setTodo(todo.filter((item) => item.id !== todoToDel));
  }

  // Update

  function handleEditModal(item) {
    setEditModal(true);
    setTodoToEdit(item);
  }

  function cancelEdit() {
    setEditModal(false);
    setTodoToEdit(null);
  }
  
function confirmEdit(newTitle) {
  newTitle = newTitle.trim();

  if (newTitle === "") {
    alert("Please enter a Todo");
    return;
  }

  const exist = todo.find(
    (item) => item.title === newTitle && item.id !== todoToEdit.id
  );

  if (exist) {
    alert("Todo already exists");
    return;
  }

  setTodo(
    todo.map((item) =>
      item.id === todoToEdit.id
        ? { ...item, title: newTitle }
        : item
    )
  );

  setEditModal(false);
  setTodoToEdit(null);
}


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <h1 className="text-6xl text-blue-500 mt-10 text-center font-bold">
        Todo App
      </h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todo={todo}
        delTodo={handleDelModal}
        editTodo={handleEditModal}
      />
      {delModal && (
        <DeleteModal cancelDel={cancelDel} ConfirmDel={ConfirmDel} />
      )}
      {editModal && (
        <UpdateModal
          cancelEdit={cancelEdit}
          confirmEdit={confirmEdit}
          currentVal={todoToEdit.title}
        />
      )}
    </div>
  );
};

export default App;
