import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, getDummyTasks } from '../../store/taskSlice';
import { Dna } from 'react-loader-spinner';

import ToDoList from '../../components/ToDoList/ToDoList';
import AddToDo from '../../components/AddToDoForm/AddToDo';
import CustomAlert from '../../components/Alert/CustomAlert';

function Home() {
  const [task, setTask] = useState('');
  const { isLoaded, errorMessage } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoItem = () => {
    if (task.trim().length > 0) {
      dispatch(addTask({ task }));
      setTask('');
    }
  };

  useEffect(() => {
    dispatch(getDummyTasks());
  }, [dispatch]);

  return (
    <main className="container mx-auto px-4">
      <AddToDo task={task} updateField={setTask} addTodo={addTodoItem} />
      {isLoaded ? (
        <div className="h-screen flex items-center justify-center">
          <Dna
            visible={isLoaded}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <ToDoList />
      )}
      {errorMessage && <CustomAlert message={errorMessage} />}
    </main>
  );
}

export default Home;
