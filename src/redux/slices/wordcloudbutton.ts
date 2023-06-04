import { createSlice } from '@reduxjs/toolkit';

// wordcloud의 word 클릭 시, reducer 생성
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
