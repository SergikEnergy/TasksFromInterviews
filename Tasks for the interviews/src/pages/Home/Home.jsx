import { useState } from 'react';

import ToDoList from '../../components/ToDoList/ToDoList';
import AddToDo from '../../components/AddToDoForm/AddToDo';

function Home() {
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
      <ToDoList todoList={todoList} toggleComplete={toggleComplete} handleRemove={handleRemove} />
    </main>
  );
}

export default Home;
