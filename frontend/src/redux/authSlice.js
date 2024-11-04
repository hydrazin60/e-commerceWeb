import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const RegisterUseAction = createAsyncThunk(
  "/auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/e~commerce/api/v1/jbn/auth/register",
        formData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.states === 409) {
        return rejectWithValue(error?.response?.data?.message);
      }
      return rejectWithValue(
        error?.response?.data?.message ||
          "An error occurred during registration."
      );
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUseAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RegisterUseAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = action.payload;
      })
      .addCase(RegisterUseAction.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
