import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUser(state, action) {},
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
