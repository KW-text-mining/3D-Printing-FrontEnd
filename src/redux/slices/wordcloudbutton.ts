import { createSlice } from '@reduxjs/toolkit';

const wordcloudbuttonslice = createSlice({
  name: 'wordcloudbutton',
  initialState: null,
  reducers: {
    changeButtonWord(state, action) {
      return action.payload;
    },
  },
});

export const {changeButtonWord} = wordcloudbuttonslice.actions;

// Reducer
export default wordcloudbuttonslice.reducer;
