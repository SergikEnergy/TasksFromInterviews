import './ToDoList.css';
import { useSelector } from 'react-redux';

import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList() {
  const todoList = useSelector((state) => state.todos.tasks);

  return (
    <ul className=" flex todo-list">
      {todoList.map((item) => (
        <ToDoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default ToDoList;
