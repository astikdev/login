import {createSlice} from "@reduxjs/toolkit";
import {loginAction} from "../actions/authAction";


interface AuthState {
  user?: User | null;
  token?: string | null | undefined;
  isLoading?: boolean;
  isError?: string | null | undefined;
}

interface User {
  id?: number;
  useName?: string;
  email?: string;
  password?: string;
  
  // Add more user fields as needed
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  isError: null,
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (builder)=>{
    builder.addCase(loginAction.pending, (state, action)=>{
      state.isLoading = true;
    })
    builder.addCase(loginAction.fulfilled, (state, action) => {
      	state.isLoading = false
        state.isError = null;
        state.token = action.payload.token;
    	}
    )
    builder.addCase(loginAction.rejected, (state, action) => {
      state.isLoading = false;
      state.token = null;
      state.isError= action.error.message;
    })
  }
});



export default authSlice.reducer;