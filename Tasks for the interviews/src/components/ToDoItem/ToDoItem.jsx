import { useDispatch } from 'react-redux';
import { removeTask, changeComplete } from '../../store/taskSlice';

function ToDoItem({ id, completed, task }) {
  const dispatch = useDispatch();

  return (
    <li className="mb-5 text-bold-500 flex items-center mb-4">
      <input
        id={`todo-${id}`}
        data-select="selected"
        className="inline-block w-6 h-6 mr-4 text-blue-700 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 focus:ring-1"
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch(changeComplete(id));
        }}
      />
      <label htmlFor={`todo-${id}`} className="text-black-500 text-3xl m-5">
        {task}
      </label>
      <button
        onClick={() => {
          dispatch(removeTask(id));
        }}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
      >
        Del
      </button>
    </li>
  );
}

export default ToDoItem;
