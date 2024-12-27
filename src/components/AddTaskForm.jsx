function AddTaskForm() {
    return (
        <form className="add-task-form">
            <input
                type="text"
                placeholder="Enter new task"
                className="task-input"
            />
            <button type="submit" className="add-task-button">
                Add task
            </button>
        </form>
    );
}

export default AddTaskForm;