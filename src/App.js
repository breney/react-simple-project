import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    },
    {
        id: 2,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 1:30pm',
        reminder: true
    }
])

const addTask = (task) =>{
  const id = Math.floor(Math.random() * 1000000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map( (task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
}

  return (
    <div className="container">
      <Header />
      {showAddTask && <AddTask addTask={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> : 'No tasks'}
    </div> 
  )
}

export default App;
