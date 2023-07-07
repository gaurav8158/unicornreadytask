import React, { useEffect, useState } from 'react'
import TaskList from './Components/TaskList'
import Login from './Components/Login'
import Signup from './Components/Signup'
import "./App.css"
import TaskForm from './Components/TaskForm'
import Filter from './Components/Filter'
import io from 'socket.io-client';
// import { BrowserRouter, Link } from 'react-router-dom'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userTasks, setUserTasks] = useState([]);
const[page,setPage]=useState(true);
const socket = io('http://localhost:3000');


useEffect(() => {
  socket.on('initialTasks', (initialTasks) => {
    setUserTasks(initialTasks);
  });

  socket.on('updatedTasks', (updatedTasks) => {
    setUserTasks(updatedTasks);
  });

  return () => {
    socket.disconnect();
  };
}, []);
  const handleSignUp = (email, password) => {
    // Check if user already exists in localStorage
    if (localStorage.getItem(email)) {
      alert('Email already registered. Please log in instead.');
      return;
    }

    // Store email and password in localStorage
    localStorage.setItem(email, password);
    alert('Sign up successful. Please log in to continue.');
  };

  const handleLogin = (email, password) => {
    // Check if email exists in localStorage
    if (localStorage.getItem(email) === password) {
      alert('Login successful!');
      setLoggedIn(true);
    } else {
      alert('Invalid email or password.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserTasks([]);
  };

  const handleAddTask = (newTask) => {
    setUserTasks([...userTasks, newTask]);
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = userTasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setUserTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = userTasks.filter((task) => task.id !== taskId);
    setUserTasks(updatedTasks);
  };

  const filterTasks = (status) => {
    if (status === 'all') {
      return userTasks;
    }
    return userTasks.filter((task) => task.status === status);
  };

  const sortTasks = (sortBy) => {
    const sortedTasks = [...userTasks];

    switch (sortBy) {
      case 'dueDate':
        sortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        break;
      case 'status':
        sortedTasks.sort((a, b) => a.status.localeCompare(b.status));
        break;
      default:
        break;
    }

    return sortedTasks;
  };

  const [filterBy, setFilterBy] = useState('all');

  const handleFilter = (selectedFilter) => {
    setFilterBy(selectedFilter);
  };

  const filteredTasks = filterBy === 'all' ? userTasks : userTasks.filter((task) => task.status === filterBy);

  return (

    <div>
      { !loggedIn ? (<nav className='nav'>
        <span onClick={()=>setPage(true)}>SignUp</span>
        <span onClick={()=>setPage(false)}>Login</span>
      </nav>):""
      }
      {loggedIn ? (
        <div>
        <nav className='nav logoutnav'> <button className='logout' onClick={handleLogout}>Logout</button></nav>
        <div className="pagehome">
           <h1>Welcome, {localStorage.getItem('username')}!</h1>
          
          <TaskForm handleAddTask={handleAddTask} />
          <Filter handleFilter={handleFilter} />
          <TaskList
            tasks={sortTasks('dueDate')}
            handleUpdateTask={handleUpdateTask}
            handleDeleteTask={handleDeleteTask}
          />
        </div>
        </div>
      ) : (
        <div className="pagehome">{page ? 
        <Signup handleSignUp={handleSignUp} /> 
        :  <Login handleLogin={handleLogin} />}
        </div>
      )}
    </div>
    
  );
};

export default App;