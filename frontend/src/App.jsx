import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config";
import Search from "./components/Search";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/todos`);
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, data);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const delTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const updateTodo = async (id, data) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/todos/${id}`, data);
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteAllTodos = async () => {
    try {
      await Promise.all(todos.map((todo) => axios.delete(`${API_BASE_URL}/todos/${todo.id}`)));
      setTodos([]);
    } catch (error) {
      console.error("Error deleting all todos:", error);
    }
  };

  return (
    <div className="todo-container">
      <h1 style={{ margin: '20px 0', fontWeight: 'bold' }}>Todo App</h1>
      <Search addTodo={addTodo} />
      <TodoList
        todos={todos}
        delTodo={delTodo}
        updateTodo={updateTodo}
        deleteAllTodos={deleteAllTodos}
      />
    </div>
  );
}

export default App;


