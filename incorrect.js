//incorrect

import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setNewTodo("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const clearTodos = () => {
    setTodos([]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type='text'
        value={newTodo}
        onChan={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodos}>Clear</button>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo}
            <button onClick={deleteTodo}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
