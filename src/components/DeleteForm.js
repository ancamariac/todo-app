import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


const TodoDelete = () => {
  const [id, setId] = useState('');

  const handleDeleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:4000/todo/${id}`);
    } catch (error) {
    }
  };

  return (
    <div className="todo-delete">
      <h2>Șterge un task după ID</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="ID-ul task-ului"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <button className="btn btn-danger" onClick={handleDeleteTodo}>
        Șterge
      </button>
    </div>
  );
};

export default TodoDelete;
