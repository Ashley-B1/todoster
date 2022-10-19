import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import axios from 'axios';
import { Todo } from '../interfaces/Todo';

interface TodoState {
  todos?: Todo[];
  isFetching: boolean;
  singleTodo?: Todo | null;
  entries: Todo | Object;
  errors: any;
}

const initialState: TodoState = {
  todos: [],
  singleTodo: null,
  isFetching: false,
  errors: null,
  entries: {},
};

export const createTodo = createAsyncThunk<Todo, Object>(
  'TODO/DELETE',
  async(data, thunkApi) => {
    try {
      const res = await axios.post('http://localhost:5001/api/todos/', data);
      return res.data;
    } catch(e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const getAllTodos = createAsyncThunk<Todo[]>(
  'TODO/FETCHALL',
  async(_, thunkApi) => {
    try {
      const res = await axios.get('http://localhost:5001/api/todos/');
      thunkApi.dispatch(getAllTodos());
      return res.data;
    } catch(e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const getOneTodo = (todoId: string) => createAsyncThunk<Todo>(
  'TODO/FETCHONE',
  async(_, thunkApi) => {
    try {
      const res = await axios.get(`http://localhost:5001/api/todos/${todoId}`);
      thunkApi.dispatch(getOneTodo(todoId));
      return res.data;
    } catch(e) {
      return thunkApi.rejectWithValue(e)
    }
  }
);

export const updateTodo = (todoId: string) => createAsyncThunk<Todo, Object>(
  'TODO/UPDATE',
  async(data, thunkApi) => {
    try {
      const res = await axios.put(`http://localhost:5001/api/todos/${todoId}`, data);
      return res.data;
    } catch(e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const deleteTodo = (todoId: string) => createAsyncThunk<Todo>(
  'TODO/DELETE',
  async(_, thunkApi) => {
    try {
      const res = await axios.delete(`http://localhost:5001/api/todos/${todoId}`);
      return res.data;
    } catch(e) {
      return thunkApi.rejectWithValue(e)
    }
  }
);

export const todoSlice = createSlice({
  name: 'TODO',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    setOneTodo: (state, action: PayloadAction<Todo>) => {
      state.singleTodo = action.payload
    },
    renewTodo: (state, action: PayloadAction<Todo>) => {
      state.entries = action.payload
    },
    newTodo: (state, action: PayloadAction<Todo>) => {
      state.entries = action.payload
    },
    removeTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos?.filter(todo => todo._id !== action.payload._id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTodo.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.singleTodo = action.payload;
      state.isFetching = false;
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.isFetching = false;
      state.errors = action.payload;
    });
    builder.addCase(getAllTodos.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isFetching = false;
    });
    builder.addCase(getAllTodos.rejected, (state, action) => {
      state.isFetching = false;
      state.errors = action.payload;
    });
    builder.addCase(getOneTodo('todoId').pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getOneTodo('todoId').rejected, (state, action) => {
      state.isFetching = false;
      state.errors = action.payload;
    });
    builder.addCase(getOneTodo('todoId').fulfilled, (state) => {
      state.isFetching = false;
      state.singleTodo = state.singleTodo;
    });
    builder.addCase(deleteTodo('todoId').pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(deleteTodo('todoId').rejected, (state, action) => {
      state.isFetching = false;
      state.errors = action.payload;
    });
    builder.addCase(deleteTodo('todoId').fulfilled, (state, action) => {
      state.isFetching = false;
      state.entries = action.payload;
    });
    builder.addCase(updateTodo('todoId').pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(updateTodo('todoId').rejected, (state, action) => {
      state.isFetching = false;
      state.errors = action.payload;
    });
    builder.addCase(updateTodo('todoId').fulfilled, (state, action) => {
      state.isFetching = false;
      state.entries = action.payload;
    });
  }
});

export default todoSlice.reducer;
export const { setOneTodo, setTodos, newTodo, removeTodo, renewTodo } = todoSlice.actions;
