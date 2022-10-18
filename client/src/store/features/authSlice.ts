import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../interfaces/User';

interface AuthState {
  user: User | null;
  isFetching: boolean;
  errors: any;
}

const initialState: AuthState = {
  user: null,
  isFetching: false,
  errors: null,
};

export const loginUser = createAsyncThunk<User>(
  'AUTH/LOGIN',
  async (data, thunkApi) => {
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', data);
      return res.data;
    } catch(e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const registerUser = createAsyncThunk<User, Object>(
  'AUTH/REGISTER',
  async (data, thunkApi) => {
    try {
      const res = await axios.post('http://localhost:5001/api/auth/register', data);
      return res.data;
    } catch(e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isFetching = false;
      state.errors = action.payload
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isFetching = false;
      state.errors = action.payload
    });
  }
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
