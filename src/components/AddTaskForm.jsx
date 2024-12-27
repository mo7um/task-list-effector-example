import { useState } from "react";
import { addTask } from "../state/events";
import { useUnit } from "effector-react";
import { tasksStore } from "../state/store";
import './styles/AddTaskForm.css'

function AddTaskForm() {
    const [taskText, setTaskText] = useState('');

    const tasks = useUnit(tasksStore);

    const handleAddTask = (e) => {
        e.preventDefault();
        if (taskText.trim()) {
            const newTask = {
                id: tasks.length + 1,
                text: taskText,
                complete: false
            }
            addTask(newTask);
            setTaskText('');
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleAddTask}>
            <input
                className="task-input"
                type="text"
                value={taskText}
                placeholder="Enter new task"
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button type="submit" className="add-task-button">
                Add task
            </button>
        </form>
    );
}

export default AddTaskForm;