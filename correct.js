//correct

import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setNewTodo("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const clearTodos = () => {
    setTodos((prevTodos) => []);
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo, i) => i !== index);
      return updatedTodos;
    });
  };

  return (
    <div>
      <input
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={clearTodos}>Clear</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
