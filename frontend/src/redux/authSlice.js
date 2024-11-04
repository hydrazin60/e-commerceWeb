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

export const LoginUseAction = createAsyncThunk(
  "/auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/e~commerce/api/v1/jbn/auth/login",
        formData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.states === 401) {
        return rejectWithValue(error?.response?.data?.message);
      }
      return rejectWithValue(
        error?.response?.data?.message || "An error occurred during login."
      );
    }
  }
);

export const CheckAuthentication = createAsyncThunk(
  "/auth/check-auth",
  async () => {
    const response = await axios.get(
      "http://localhost:4000/e~commerce/api/v1/jbn/auth//check-auth",
      {
        withCredentials: true,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Expires: "0",
        },
      }
    );
    return response.data;
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
        state.user = null;
      })
      .addCase(RegisterUseAction.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(LoginUseAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUseAction.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success ? true : false;
      })
      .addCase(LoginUseAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(CheckAuthentication.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CheckAuthentication.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(CheckAuthentication.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
