import { useAppDispatch } from '../../hooks/hooksRedux';
import { changeFilter, selectActiveFilter } from '../../store/filterSlice';
import { FilterButtonProps } from '../../types';

function CustomButton({ category, isActive }: FilterButtonProps) {
  const dispatch = useAppDispatch();
  return (
    <button
      className={`inline-block rounded-md flex-1 px-8 py-3 text-2xl  hover:text-gray-700 focus:relative ${
        isActive ? 'text-green-500 bg-white shadow-sm' : 'text-gray-500'
      }`}
      onClick={() => {
        dispatch(changeFilter(category));
        dispatch(selectActiveFilter(category));
      }}
    >
      {category}
    </button>
  );
}

export default CustomButton;
