import { TodoType, TodoDispatchTypes, FAILED_TASKS, FETCHING_TASKS, RECEIVED_TASKS } from '../actions/todosActionsType'

interface DefaultStateI {
  loading: boolean,
  todos?: TodoType
}

const defaultState: DefaultStateI = {
  loading: false
};

const todoReducer = (state : DefaultStateI = defaultState, action: TodoDispatchTypes) : DefaultStateI => {
  switch (action.type) {
    case FAILED_TASKS:
      return {
        loading: false,
      }
    case FETCHING_TASKS:
      return {
        loading: true,
      }
    case RECEIVED_TASKS:
      return {
        loading: false,
        todos: action.payload
      }
    default:
      return state;
  }
};

export default todoReducer;
