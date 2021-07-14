import React, { useState, ChangeEvent } from "react";
import TodoTask from "../Components/TodoTask";
import { ITask } from "../Components/Interfaces";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Dead line (in days)"
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

// import { useState } from 'react';

// export default function Home() {
//   const [todos, setTodos] = useState(['todo 1', 'todo 2']);
//   const [todo, setTodo] = useState('');
//   const removeTodo = (todo: string) => {
//     setTodos(todos.filter(t => t !== todo));
//   };
//   return (
//     <>
//       <input value={todo} onChange={e => setTodo(e.target.value)} />
//       <button onClick={() => setTodos([...todos, todo])}>Add</button>
//       {todos.map((todo) => (
//         <>
//           <h1>{todo}</h1>
//           <button onClick={() => removeTodo(todo)}>remove</button>
//         </>
//       ))}
//     </>
//   );
// };
