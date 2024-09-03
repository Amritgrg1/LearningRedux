import { createSlice } from '@reduxjs/toolkit';

export const iconSlice = createSlice({
  name: 'icon',
  initialState: {
    isDay: true, // Initial state for toggling between day and night
    color: 'black', // Initial color
  },
  reducers: {
    toggleIcon: (state) => {
      state.isDay = !state.isDay;
      state.color = state.isDay ? 'black' : 'white'; // Change the color based on the icon state
    },
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { toggleIcon, changeColor } = iconSlice.actions;
export default iconSlice.reducer;
