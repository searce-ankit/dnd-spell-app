import { configureStore } from '@reduxjs/toolkit';
import favouriteSpellReducer from '../features/spell/spellSlice';

export const store = configureStore({
  reducer: {
    favouriteSpell: favouriteSpellReducer,
  },
});
