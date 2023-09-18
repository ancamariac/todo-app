import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    try {
      const newTodo = {
        title,
        description,
        done: false,
      };

      await axios.post("http://localhost:4000/todo", newTodo);
    } catch (error) {}
  };

  return (
    <div className="todo-form">
      <h2>Adaugă un task nou</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Titlu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Descriere"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddTodo}>
        Adaugă
      </button>
    </div>
  );
};

export default TodoForm;
