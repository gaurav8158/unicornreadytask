import React, { useState } from 'react'

const Filter = ({ handleFilter }) => {
    const [filterBy, setFilterBy] = useState('all');
  
    const handleFilterChange = (e) => {
      const selectedFilter = e.target.value;
      setFilterBy(selectedFilter);
      handleFilter(selectedFilter);
    };
  
    return (
      <div>
        <h3>Filter Tasks</h3>
        <select value={filterBy} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    );
  };

export default Filter