import React from 'react';
import './App.css';
import TaskList from "./components/TaskList/TaskList";
import TaskInputForm from "./components/TaskInputForm/TaskInputForm";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [tasks, setTasks] = React.useState([{title: 'hi1', description:'to 1', status: 'Completed'},
  {title: 'hi2', description:'to 2', status: 'Pending'}]);

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleEdit = () => {
    // handle edit logic
  };

  const handleDelete = () => {
    // handle delete logic
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Task List</h1>
      <br/><br/>
      <SearchBar onChange={setSearchTerm} />
      <TaskList tasks={filteredTasks} onEdit={handleEdit} onDelete={handleDelete} />
      <br/><br/>
      <TaskInputForm />
    </div>
  );
}

export default App;
