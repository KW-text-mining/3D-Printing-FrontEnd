import { createSlice } from '@reduxjs/toolkit';

// 날짜 지정 시, reducer 생성
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
