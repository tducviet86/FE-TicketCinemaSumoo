import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getTokenAuth, loginThunk } from "./auth.thunk"
import { User } from "../../entity/types.entity";

export interface AuthState {
  token: string | null
  user: User | null;
}

const INIT_STATE: AuthState = {
  token: null,
  user: null,
}
const authSlice = createSlice({
  name: "auth",
  initialState: INIT_STATE,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getTokenAuth.fulfilled,
      (
        state,
        action: PayloadAction<{ token: string | null; user: User | null }>
      ) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
      }
    )
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
  }
})
export const { logout } = authSlice.actions
export default authSlice.reducer