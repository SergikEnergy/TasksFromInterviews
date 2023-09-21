export default interface ITask {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}

export interface ITaskState {
  tasks: ITask[];
  isLoaded: boolean;
  errorMessage: null | string;
}

export interface AddToDoProps {
  task: string;
  updateField: (str: string) => void;
  addTodo: () => void;
}

export interface AlertProps {
  message: string;
}
