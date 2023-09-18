import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/TodoList.css"; // Adăugați fișierul CSS personalizat

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/todo");
        setTodos(response.data);
      } catch (error) {}
    };

    fetchTodos();
  }, []);

  const handleCheckboxChange = async (id, title, description, done) => {
    try {
      await axios.post(`http://localhost:4000/todo/${id}`, {
        title,
        description,
        done: !done,
      });
      // Actualizăm starea locală a task-ului după ce am primit răspunsul de la server
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, done: !done } : todo
      );
      setTodos(updatedTodos);
    } catch (error) {}
  };

  return (
    <div className="todo-list">
      <h2>All tasks</h2>
      <br></br>
      <div className="card-deck">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`card ${todo.done ? "bg-success text-white" : ""}`}
          >
            <div className="card-body">
              <h3 className="card-title">
                {todo.title} (ID: {todo.id})
              </h3>
              <p className="card-text">{todo.description}</p>
              <p className="card-text">Completed: {todo.done ? "Yes" : "No"}</p>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`checkbox-${todo.id}`}
                  checked={todo.done}
                  onChange={() =>
                    handleCheckboxChange(
                      todo.id,
                      todo.title,
                      todo.description,
                      todo.done
                    )
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`checkbox-${todo.id}`}
                ></label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
