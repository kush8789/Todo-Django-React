import React, { useState, useRef } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { TbEdit } from 'react-icons/tb';

const TodoList = ({ todos, delTodo, updateTodo, deleteAllTodos }) => {
  let taskRef = useRef(null);

  let [todoId, setTodoId] = useState(0);
  let [task, setTask] = useState("");
  let [toggle, setToggle] = useState(false);

  const todoItem = (task, id) => {
    setTodoId(id);
    setTask(task);
    setToggle(true);
  };

  const activeTasksCount = todos.filter(todo => !todo.completed).length;

  return (
    <>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-list-item" key={index}>
            <div className="task">
              <p id="t_task">{todo.task}</p>
            </div>
            <div className="btn-container">
              <div className="edit">
                <TbEdit size={25} onClick={() => todoItem(todo.task, todo.id)} />
              </div>
              <div className="del">
                <AiFillDelete size={25} onClick={() => delTodo(todo.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {todos.length > 0 && (
        <div className="footer">
          <div className="active-tasks">
            <p>{activeTasksCount} Active Tasks</p>
          </div>
          <div className="delete-all-container">
            <button className="delete-all-button" onClick={deleteAllTodos}>Delete All</button>
          </div>
        </div>
      )}

      {toggle && (
        <div className="modal-container">
          <div className="modal">
            <h1>Update Form</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateTodo(todoId, { task });
                setToggle(false);
              }}
            >
              <input
                type="text"
                ref={taskRef}
                placeholder="Update Todo"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
              <button id="add">Add</button>
            </form>
            <div className="btn-container">
              <button className="cancel mod-btn" onClick={() => setToggle(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoList;



