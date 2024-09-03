import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "black",
}

export const backgroundSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    backgroundColor: (state) =>{
        state.value = "red";
    },
    resetColor: (state) => {
        state.value = "black";
    },
  },
})

// Action creators are generated for each case reducer function
export const { backgroundColor, resetColor } = backgroundSlice.actions

export default backgroundSlice.reducer