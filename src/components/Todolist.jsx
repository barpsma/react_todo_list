import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todolist = () => {
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    const response = await axios.get("http://localhost:8000/api/todos");
    setTodos(response.data);
  };

  const deleteTodo = async (todoId) => {
    await axios.delete(`http://localhost:8000/api/todos/${todoId}`);
  };

  return (
    <div>
      <h1 className="title">Todo</h1>
      <h2 className="subtitle">List Todo</h2>
      <Link to="/todo/add" className="button is-primary mb-2">
        New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Todos.map((Todo, index) => (
            <tr key={Todo.id}>
              <tr>
                <td>{Todo.title}</td>
                <td>{Todo.completed}</td>
                <td>
                  <Link
                    to={`/todo/edit/${Todo.id}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTodo(Todo.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tr>
          ))}
          <tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
