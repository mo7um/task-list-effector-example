import { useUnit } from 'effector-react';
import { toggleTask } from './../state/events';
import { tasksStore } from './../state/store';
import './styles/TaskList.css'

function TaskList() {
    const tasks = useUnit(tasksStore);

    const handleToggleTask = (id) => {
        toggleTask(id);
    };

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className={`task-item ${task.completed ? 'completed' : ''}`}
                >
                    <span className='task-text'>{task.text}</span>
                    <button
                        className="toggle-task-button"
                        onClick={() => handleToggleTask(task.id)}
                    >
                        {task.completed ? 'Done' : 'In progress'}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;