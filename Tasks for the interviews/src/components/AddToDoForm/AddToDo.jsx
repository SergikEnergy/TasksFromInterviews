function AddToDo({ task, updateField, addTodo }) {
  return (
    <div className="flex gap-3 flex-col items-center">
      <label className="block w-128 text-gray-700 text-xl font-bold mb-1" htmlFor="newField">
        Type in your new task:
      </label>
      <div className="flex ">
        <input
          id="newField"
          type="text"
          className="inline-block flex-1 shadow border rounded mr-2 py-2 px-3 text-blue-600 leading-tight focus:outline-none focus:shadow-outline"
          value={task}
          onChange={(event) => {
            updateField(event.target.value);
          }}
        />
        <button
          onClick={addTodo}
          className="inline w-32 todo__submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add task
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
