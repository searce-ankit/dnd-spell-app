import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const favouriteSpellSlice = createSlice({
  name: 'favouriteSpell',
  initialState,
  reducers: {
    addToFavourite: (state,action) => {
      state.value.push(action.payload);
    },
    removeFromfavourite: (state,action) => {
        let index= state.value.findIndex(item => item.index === action.payload);
        state.value.splice(index,1);
    },
  }
});

export const { addToFavourite, removeFromfavourite } = favouriteSpellSlice.actions;

export const selectFavourites = (state) => {
    return state.favouriteSpell.value;
}


export default favouriteSpellSlice.reducer;
