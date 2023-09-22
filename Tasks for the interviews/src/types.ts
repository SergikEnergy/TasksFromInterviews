export default interface ITask {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}

export type Categories = 'all' | 'completed' | 'active';

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

export interface FilterButtonProps {
  category: string;
  isActive: boolean;
  id?: number;
}

export interface IFilterState {
  buttons: FilterButtonProps[];
  selected: Categories;
}
