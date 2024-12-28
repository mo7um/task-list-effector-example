import { useEffect } from 'react';
import { fetchTasks } from './state/effects';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="app-container">
            <h1>Effector Tasks List</h1>
            <AddTaskForm />
            <TaskList />
        </div>
    );
}

export default App;
