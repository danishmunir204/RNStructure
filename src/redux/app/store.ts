import {configureStore} from '@reduxjs/toolkit';

import middlewares from './middleWear';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from '../combineReducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const authReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    authReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      middlewares,
    }),
});

const persister = persistStore(store);
export {store, persister};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
