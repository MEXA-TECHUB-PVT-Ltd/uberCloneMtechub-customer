import {combineReducers, configureStore} from '@reduxjs/toolkit';

/////////reducer/////////////
import CreateProfileReducer from './CreateProfileSlice';
import UpdateProfileReducer from './UpdateProfileSlice';
import EmojiReducer from './EmojiSlice'

export const Store = configureStore({
  reducer: {
    createProfile: CreateProfileReducer,
    updateProfile: UpdateProfileReducer,
    emoji:EmojiReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
