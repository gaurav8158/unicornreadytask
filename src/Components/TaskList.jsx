import React from 'react'
import Task from './Task';

const TaskList = ({ tasks, handleUpdateTask, handleDeleteTask }) => {
    return (
      <div>
        <h2>Task List</h2>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    );
  };
  

export default TaskList