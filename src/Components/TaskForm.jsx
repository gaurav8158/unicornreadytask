import React, { useState } from 'react'

const TaskForm = ({ handleAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
  
    const handleSubmit = () => {
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        status: 'incomplete',
      };
      handleAddTask(newTask);
      setTitle('');
      setDescription('');
      setDueDate('');
    };
  
    return (
      <div>
        <h2>Add New Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <br />
        <button className='blue' onClick={handleSubmit}>Add Task</button>
      </div>
    );
  };

export default TaskForm