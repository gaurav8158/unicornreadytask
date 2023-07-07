import React, { useState } from 'react';

const Task = ({ task, handleUpdateTask, handleDeleteTask }) => {
  const { id, title, description, dueDate, status } = task;
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ title, description, dueDate, status });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    handleUpdateTask(id, editedTask);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedTask({ title, description, dueDate, status });
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleStatusChange = () => {
    const newStatus = status === 'incomplete' ? 'in progress' : status === 'in progress' ? 'completed' : 'incomplete';
    setEditedTask((prevState) => ({
      ...prevState,
      status: newStatus,
    }));
  };

  const handleDelete = () => {
    handleDeleteTask(id);
    // axios
    // .post('/api/signup', { email, password })
    // .then((response) => {
    //   // Handle successful registration (e.g., redirect to dashboard)
    //   console.log(response.data);
    // })
    // .catch((error) => {
    //   Handle registration errors (e.g., display error message)
    //   console.error(error);
    // });

  };

  return (
    <div>
      {editing ? (
        <div>
          <input type="text" name="title" value={editedTask.title} onChange={handleInputChange} />
          <br />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
          ></textarea>
          <br />
          <input
            type="text"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleInputChange}
          />
          <br />
          <select name="status" value={editedTask.status} onChange={handleInputChange}>
            <option value="incomplete">Incomplete</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <br />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>Description: {description}</p>
          <p>Due Date: {dueDate}</p>
          <p>Status: {status}</p>
          <button onClick={handleStatusChange}>
            {status === 'incomplete'
              ? 'Mark as In Progress'
              : status === 'in progress'
              ? 'Mark as Completed'
              : 'Mark as Incomplete'}
          </button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};


export default Task;
