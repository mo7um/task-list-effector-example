import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
    return (
        <div className="app-container">
            <h1>Effector Tasks List</h1>
            <AddTaskForm />
            <TaskList />
        </div>
    );
}

export default App;
