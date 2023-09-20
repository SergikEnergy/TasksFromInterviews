import { useState } from 'react';
import './ToDoList.css';
import AddToDo from '../AddToDoForm/AddToDo';

function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleRemove = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (task && task.trim().length > 0) {
      setTodoList([
        ...todoList,
        {
          id: new Date().getTime(),
          task,
          completed: false,
        },
      ]);
    }
    setTask('');
  };

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((elem) => {
        if (elem.id === id) {
          return { ...elem, completed: !elem.completed };
        }
        return elem;
      })
    );
  };

  return (
    <main className="container mx-auto px-4">
      <AddToDo task={task} handleChange={handleChange} addTodo={addTodo} />
      <div className="todo-container flex">
        <ul className="todo-list">
          {todoList.map((item) => (
            <li className="mb-5 text-bold-500 flex items-center mb-4" key={item.id}>
              <input
                id={`todo-${item.id}`}
                data-select="selected"
                className="inline-block w-6 h-6 mr-4 text-blue-700 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 focus:ring-1"
                type="checkbox"
                checked={item.completed}
                onChange={() => {
                  toggleComplete(item.id);
                }}
              />
              <label htmlFor={`todo-${item.id}`} className="text-black-500 text-3xl m-5">
                {item.task}
              </label>
              <button
                onClick={() => {
                  handleRemove(item.id);
                }}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
              >
                Del
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ToDoList;
