import { useState } from "react";

function Task({handleAddTask, newId}) {
  const [toDo, setToDo] = useState("");

  const addTaskHandler = (event) => {
    // prevents the page from reloading
    event.preventDefault();

    const newTaskObject = {
      task_name: toDo,
      id: newId
    }

    handleAddTask(newTaskObject);
    setToDo('');
  }

  return (
    <div>
      <form onSubmit={addTaskHandler}>
        <input
          value={toDo}
          placeholder="Add task here"
          onChange={(event) => setToDo(event.target.value)}
        ></input>
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default Task;