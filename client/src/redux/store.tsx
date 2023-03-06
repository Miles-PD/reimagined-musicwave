import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
//import youtubeReducer from './features/youtubeSlice';

const store = configureStore({
  reducer: {
    player: playerReducer,
    //youtube: youtubeReducer,
  },
});



export default store;
export type RootState = ReturnType<typeof store.getState>