import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0, 
  sort: {
    name: 'popularity',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
   setCategoryId(state, action) {
    console.log('action setCategoryId', action)
    state.categoryId = action.payload;
  },
  setSort(state, action) {
    console.log('action setCategoryId', action)
    state.sort = action.payload;
   }
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setSort } = filterSlice.actions

export default filterSlice.reducer