/* eslint-disable no-param-reassign */
// Global Imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Local Imports
import { ScreenSize } from 'utils/sharedTypes';
import { RootState } from 'app/store';

export interface PresentationState {
  screenSize: ScreenSize;
}

const initialState: PresentationState = {
  screenSize: 'Desktop',
};

export const presentationSlice = createSlice({
  name: 'presentation',
  initialState,
  reducers: {
    updateScreenSize: (state, action: PayloadAction<ScreenSize>) => {
      state.screenSize = action.payload;
    },
  },
});

export const selectScreenSize = (state: RootState) =>
  state.presentation.screenSize;
export const { updateScreenSize } = presentationSlice.actions;

export default presentationSlice.reducer;
