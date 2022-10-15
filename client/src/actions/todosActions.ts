import { Dispatch } from "redux";
import { TodoDispatchTypes, FETCHING_TASKS, FAILED_TASKS, RECEIVED_TASKS } from "./todosActionsType";
import axios from 'axios';

export const getTodos = () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
  try {
    dispatch({
      type: FETCHING_TASKS
    })

    const res = await axios.get('/api/tasks');

    dispatch({
      type: RECEIVED_TASKS,
      payload: res.data
    })
  } catch(e) {
    dispatch({
      type: FAILED_TASKS
    })
  }
};
