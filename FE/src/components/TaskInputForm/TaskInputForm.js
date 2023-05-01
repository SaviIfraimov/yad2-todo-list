import React, { useState } from 'react';
import './TaskInputForm.css';

function TaskInputForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');

  function handleSubmit(event) {
    event.preventDefault();

    const task = {
      title: title,
      description: description,
      status: status
    };

    props.onSubmit(task);
    setTitle('');
    setDescription('');
    setStatus('Pending');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={status}
        onChange={e => setStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskInputForm;
