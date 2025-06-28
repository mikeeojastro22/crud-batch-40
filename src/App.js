import { useState } from 'react';
import './App.css';
import data from './assets/task-list.json';
import Task from './components/Task.jsx';

function App() {

  const [tasks, setTasks] = useState(data); // data is an array
  const [count, setCount] = useState(tasks.length);

  const handleAddTask = (newTask) => {
    // newTask = user input which will come from the Task component

    // [...prevTasks, newTask] - ... - spread operator - creates a new array that contains the previous tasks with the newly created task
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // updating the next id
    const newCount = count + 1;
    setCount(newCount);
  }

  // Delete
  const handleDeleteTask = (taskId) => {
    // filter - matches the condition then it will return the element if the condition is true; creates new array; traverses through the array
    // setTasks - function binded to tasks
    // prevTasks - current tasks
    // task - pertains to each element of tasks
    // we only include the non deleted tasks in our new array/excluding the task id that the user wants to delete
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="App">
      {/* Read */}
      {
        tasks.map((task) => {
          return (
            <div key={task.id}>
              <span>{task.task_name}</span>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          )
        })
      }
      <Task handleAddTask={handleAddTask} newId={count} />
    </div>
  );
}

export default App;
