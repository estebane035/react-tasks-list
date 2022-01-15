import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {
  const [showFormTask, setShowFormTask] = useState(false)
  const [tasks, setTasks] = useState([
                                        {
                                            "id": 1,
                                            "text": "Doctors Appointment",
                                            "day": "Feb 5th at 2:30pm",
                                            "reminder": true
                                        },
                                        {
                                            "id": 2,
                                            "text": "Meeting at School",
                                            "day": "Feb 6th at 1:30pm",
                                            "reminder": true
                                        }
                                    ]);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
    toggleForm();
  }
  
  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ));
  }

  const toggleForm = () => {
    setShowFormTask(!showFormTask);
  }

  return (
    <div className="container">
      <Header onAdd={toggleForm} showFormTask={showFormTask}/>

      { showFormTask
        ? <AddTask onAdd={addTask}/> 
        : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      }
      
    </div>
  );
}

export default App;
