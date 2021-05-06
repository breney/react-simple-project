import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState, useEffect } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect( () => {
    const getTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      setTasks(data)
      console.log(data)
    }
    getTasks()
  }, [])

const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = res.json()
    return data
}

const addTask = async (task) =>{
  task.id = Math.floor(Math.random() * 1000000) + 1;
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks, data])
}

const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })
  setTasks(tasks.filter( (task) => task.id !== id))
}

const toggleReminder = async (id) => {
  const taskToggle = await fetchTask(id)
  

  const updatedTask = {...taskToggle, reminder: !taskToggle.reminder}
  console.log(updatedTask)

  const res = await fetch(`http://Localhost:5000/tasks/${id}`, {
    method:'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatedTask)
  })

  const data = await res.json()

  setTasks(tasks.map( (task) => task.id === id ? {...task, reminder: data.reminder} : task ))
}

  return (
    <div className="container">
      <Header onAdd= { () => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask addTask={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> : 'No tasks'}
    </div> 
  )
}

export default App;
