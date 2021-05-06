import Task from './Task'

const Tasks = ({ tasks, deleteTask, toggleReminder }) => {
    return (
        <>
            {tasks.map( (task) => (
            <Task deleteTask={deleteTask} key={task.id} task={task} toggleReminder={toggleReminder}/>
            ))}
        </>
    )
}

export default Tasks
