import './ToDoList.css';
import { useAppSelector } from '../../hooks/hooksRedux';
import selectByFilter from '../../store/selectors';

import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList() {
  const todoList = useAppSelector(selectByFilter);
  console.log(todoList);

  return (
    <ul className=" flex todo-list flex-col items-center mt-5">
      {todoList.map((item) => (
        <ToDoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default ToDoList;
