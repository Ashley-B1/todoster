export const FETCHING_TASKS = 'GET_TODOS';
export const FAILED_TASKS = 'TODOS_ERROR';
export const RECEIVED_TASKS = 'TODOS_SUCCESS';

export type TodoType =  {
  task: TodoTask[]
}

export type TodoTask = {
  task: {
    task: string,
    isComplete: boolean,
    id: number
  }
}

export interface TodoFetching {
  type: typeof FETCHING_TASKS
}

export interface TodoFailure {
  type: typeof FAILED_TASKS
}

export interface TodoReceived {
  type: typeof RECEIVED_TASKS,
  payload: TodoType
};

export type TodoDispatchTypes = TodoFailure | TodoFetching | TodoReceived
