import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { TAuthorizationState } from "modules/authorization/types";

const initialState: TAuthorizationState = {
  isAuth: true,
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setIsAuth(state: TAuthorizationState, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = authorizationSlice.actions;

export default authorizationSlice.reducer;
