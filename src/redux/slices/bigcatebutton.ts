import { createSlice } from '@reduxjs/toolkit';

// bigcategory 클릭 시, reducer 생성
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
