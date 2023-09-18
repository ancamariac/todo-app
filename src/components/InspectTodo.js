import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';


const TodoView = () => {
  const [id, setId] = useState("");
  const [todo, setTodo] = useState(null);

  const handleViewTodo = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/todo/${id}`);
      setTodo(response.data);
    } catch (error) {
    }
  };

  return (
    <div className="todo-view">
      <h2>Afișează un task după ID</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="ID-ul task-ului"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleViewTodo}>
        Afișează
      </button>
      {todo && (
        <div className="card mt-3">
          <div className="card-body">
            <h3 className="card-title">{todo.title}</h3>
            <p className="card-text">{todo.description}</p>
            <p className="card-text">Completat: {todo.done ? "Da" : "Nu"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoView;
