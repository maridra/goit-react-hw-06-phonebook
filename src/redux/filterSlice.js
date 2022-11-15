import { createSlice } from '@reduxjs/toolkit';
const inputValue = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: inputValue,
  reducers: {
    setFilterValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
