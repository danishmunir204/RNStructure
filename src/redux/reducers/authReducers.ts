import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const initialState = {
  userData: {} as SignInResponse,
  isLoading: false,
  error: null as string | null,
};

const authReducersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    DATA_LOADING: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    LOGIN: (state, action: PayloadAction<SignInResponse>) => {
      state.userData = action.payload;
      state.error = null;
    },
    
    DATA_FAILED: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    resetAuthState: (state) => {
      state.userData = initialState.userData;
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
    },
  },
});

export const { resetAuthState, DATA_LOADING, DATA_FAILED, LOGIN } = authReducersSlice.actions;

export default authReducersSlice.reducer;
