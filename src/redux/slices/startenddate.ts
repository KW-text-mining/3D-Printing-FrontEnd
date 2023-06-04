import { createSlice } from '@reduxjs/toolkit';

const startenddateslice = createSlice({
  name: 'startenddate',
  initialState: null,
  reducers: {
    changeDate(state, action) {
      return action.payload;
    },
  },
});

export const {changeDate} = startenddateslice.actions;

// Reducer
export default startenddateslice.reducer;
