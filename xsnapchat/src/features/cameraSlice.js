import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    value: 0,
  },
  reducers: {
   
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = cameraSlice.actions;


export const selectcamera = state => state.camera.value;

export default cameraSlice.reducer;
