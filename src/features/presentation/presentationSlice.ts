// Global Imports
import { createSlice } from '@reduxjs/toolkit';

// Local Imports
import { ScreenSize } from 'utils/sharedTypes';

export interface PresentationState {
  screenSize: ScreenSize;
}

const initialState: PresentationState = {
  screenSize: 'Desktop',
};

export const presentationSlice = createSlice({
  name: 'presentation',
  initialState,
  reducers: {},
});

export default presentationSlice.reducer;
