import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { TodoTask } from './components/TodoTask';
import {ITask} from './interfaces';

const App: React.FC = () => {

  const [task, setTask] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date(0));
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChangeTask = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  }
  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>): void => {
    setDate(new Date(event.target.value));
  }

  const addTask = (): void => {
    const newTask = { id: Number(new Date().getTime()), name: task, date: date };
    if (task && date) {
      setTodoList([...todoList, newTask])
      setTask('');
      setDate(new Date(0));
    }
  }

  const finishTask = (taskToDelete: number): void => {
    const newTodoList = todoList.filter(task => { return task.id !== taskToDelete});
    setTodoList(newTodoList);
  }

  return (
    <div className='App'>
      <div className='header container'>
        <h1>New Task</h1>
        <div className='input-container'>
        <input 
          type='text' 
          placeholder='Task...'
          onChange={e => handleChangeTask(e)}
          value={task}
          required
        />
        <input
          type='date'
          placeholder="DD/MM/YYYY"
          value={date.toISOString().substring(0, 10)}
          onChange={e => handleChangeDate(e)}
        />
        </div>
        <button type="submit" onClick={addTask}>Add</button>
      </div>
      {!!todoList.length &&
      <div className='todo-list container'>
        <h1>Todo List</h1>
        <div className='todo-list-container'>
          {todoList.map((task: ITask, index: number) => {
            return (
              <TodoTask key={index} task={task}
              finishTask={finishTask} />
            )
          })}
        </div>
      </div>
    }
    </div>
  );
}

export default App;
