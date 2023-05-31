import { createSlice } from '@reduxjs/toolkit';

const bigcatebuttonslice = createSlice({
  name: 'bigcatebutton',
  initialState: null,
  reducers: {
    changeButtonTitle(state, action) {
      return action.payload;
    },
  },
});

export const {changeButtonTitle} = bigcatebuttonslice.actions;

// Reducer
export default bigcatebuttonslice.reducer;
