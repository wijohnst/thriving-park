/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@auth0/auth0-react';
import { RootState } from 'app/store';

export interface SessionState {
  isAuthenticated: boolean;
  isAuthLoading: boolean;
  user: User | undefined;
}

const initialState: SessionState = {
  isAuthenticated: false,
  isAuthLoading: false,
  user: undefined,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    startSession: (
      state,
      action: PayloadAction<{
        isAuthenticated: boolean;
        isAuthLoading: boolean;
        user: User | undefined;
      }>
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isAuthLoading = action.payload.isAuthLoading;
      state.user = action.payload.user;
    },
  },
});

export const selectSession = (state: RootState) => state.session;

export const { startSession } = sessionSlice.actions;

export default sessionSlice.reducer;
