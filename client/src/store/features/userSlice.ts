import { createAsyncThunk, createSlice, PayloadAction  } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../interfaces/User';

interface UserState {
  isFetching: boolean;
  singleUser?: User | null;
  entries: User | Object;
  errors: any;
  newState: Object
}

const initialState: UserState = {
  singleUser: null,
  isFetching: false,
  errors: null,
  entries: {},
  newState: {},
}

export const getUser = (userId: string) => createAsyncThunk<User>(
  'USER/FETCHONE',
  async(_, thunkApi) => {
    try {
      const res = await axios.get(`http://localhost:5001/api/users/${userId}`);
      thunkApi.dispatch(getUser(userId));
      return res.data;
    } catch(e) {
      return thunkApi.rejectWithValue(e)
    }
  }
);

export const updateUser = (userId: string) => createAsyncThunk<User, Object>(
  'USER/UPDATE',
  async(data, thunkApi) => {
    try {
      const res = await axios.put(`http://localhost:5001/api/users/${userId}`, data);
      return res.data;
    } catch(e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const deleteUser = (userId: string) => createAsyncThunk<User>(
  'USER/DELETE',
  async(_, thunkApi) => {
    try {
      const res = await axios.delete(`http://localhost:5001/api/users/${userId}`);
      return res.data;
    } catch(e) {
      return thunkApi.rejectWithValue(e)
    }
  }
);

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.singleUser = action.payload;
    },
    renewUser: (state, action: PayloadAction<User>) => {
      state.entries = action.payload;
    },
    removeUser: (state, action: PayloadAction<User>) => {
      state.singleUser = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser('userId').pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getUser('userId').fulfilled, (state, action) => {
      state.isFetching = false;
      state.singleUser = action.payload
    });
    builder.addCase(getUser('userId').rejected, (state, action) => {
      state.isFetching = false;
      state.errors = action.payload
    });
    builder.addCase(updateUser('userId').pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(updateUser('userId').fulfilled, (state, action) => {
      state.isFetching = false;
      state.entries = action.payload
    });
    builder.addCase(updateUser('userId').rejected, (state, action) => {
      state.isFetching = false;
      state.errors = action.payload
    });
    builder.addCase(deleteUser('userId').pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(deleteUser('userId').fulfilled, (state, action) => {
      state.isFetching = false;
      state.entries = action.payload
    });
    builder.addCase(deleteUser('userId').rejected, (state, action) => {
      state.isFetching = false;
      state.errors = action.payload
    });
  }
});

export default userSlice.reducer;
export const { renewUser, removeUser, setUser } = userSlice.actions;
