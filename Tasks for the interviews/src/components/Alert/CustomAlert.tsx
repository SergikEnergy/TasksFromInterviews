import { AlertProps } from '../../types';

function CustomAlert({ message }: AlertProps) {
  return (
    <div role="alert" className="flex flex-col items-center justify-center">
      <div className="max-w-screen-md w-96 flex-1 bg-red-600 text-white font-size font-bold rounded-t px-4 py-2">
        Error/Warning
      </div>
      <div className="flex-1 max-w-screen-md w-96 border border-t-0 border-red-400 rounded-b bg-gray-100 px-6 py-8 text-red-700">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default CustomAlert;
