import './ToDoList.css';

import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList({ todoList, toggleComplete, handleRemove }) {
  return (
    <ul className=" flex todo-list">
      {todoList.map((item) => (
        <ToDoItem key={item.id} {...item} toggleComplete={toggleComplete} handleRemove={handleRemove} />
      ))}
    </ul>
  );
}

export default ToDoList;
