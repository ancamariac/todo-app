import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/todo");
        setTodos(response.data);
      } catch (error) {
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="todo-list">
      <h2>Listă de task-uri</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Completat: {todo.done ? "Da" : "Nu"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
