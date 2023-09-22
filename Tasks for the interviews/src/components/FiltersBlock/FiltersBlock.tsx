import CustomButton from '../CustonButton/CustomButton';
import { useAppSelector } from '../../hooks/hooksRedux';

function FiltersBlock() {
  const buttons = useAppSelector((state) => state.filters.buttons);

  return (
    <div className="flex justify-center max-w-xl mx-auto rounded-lg border border-purple-300 bg-blue-100 p-1">
      {buttons.map((elem, index) => (
        <CustomButton key={index} {...elem} />
      ))}
    </div>
  );
}

export default FiltersBlock;
