import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/taskSlice';

import ToDoList from '../../components/ToDoList/ToDoList';
import AddToDo from '../../components/AddToDoForm/AddToDo';

function Home() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const addTodoItem = () => {
    if (task.trim().length > 0) {
      dispatch(addTask({ task }));
      setTask('');
    }
  };

  const handleRemove = (id) => {
    // setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    // setTodoList(
    //   todoList.map((elem) => {
    //     if (elem.id === id) {
    //       return { ...elem, completed: !elem.completed };
    //     }
    //     return elem;
    //   })
    // );
  };

  return (
    <main className="container mx-auto px-4">
      <AddToDo task={task} updateField={setTask} addTodo={addTodoItem} />
      <ToDoList />
    </main>
  );
}

export default Home;
