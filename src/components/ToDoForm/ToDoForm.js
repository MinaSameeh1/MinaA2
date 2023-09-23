import React from 'react';
import { useState } from 'react';


const ToDoForm = ({ handleChange, handleSubmit, toDoVal }) => {
    return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} defaultValue={toDoVal} />
      <button onClick={handleSubmit} type='submit'>ADD</button>
    </form>
  );
};

export default ToDoForm;