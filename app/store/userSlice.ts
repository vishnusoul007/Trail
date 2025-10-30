import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  password: string;
  page: "signin" | "signup" | "details";
}

const initialState: UserState = {
  name: "",
  email: "",
  password: "",
  page: "signin",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string; email: string; password: string }>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clearUser: (state) => 
    {
      state.name = "";
      state.email = "";
      state.password = "";
    },
    login: (state, action: PayloadAction<{  email: string; password: string; }>) => {
      state.email = action.payload.email;
      state.email = action.payload.password;
      state.page = "details";
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.page = "signin";
    },
    goToSignUp: (state) => {
      state.page = "signup";
    },
    goToSignIn: (state) => {
      state.page = "signin";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const { login, logout, goToSignUp, goToSignIn } = userSlice.actions; // ✅ exported here
export default userSlice.reducer;
