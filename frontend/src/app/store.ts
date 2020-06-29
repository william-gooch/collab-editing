import { configureStore, ThunkAction, Action, applyMiddleware } from '@reduxjs/toolkit';
import createSocketIoMiddleware from 'redux-socket.io';

import io from 'socket.io-client';

import liveEditingReducer from '../features/editing/liveEditing';

let socket = io('http://localhost:3000');
let socketIoMiddleware = createSocketIoMiddleware(socket, 'editing/');

export const store = configureStore({
  reducer: {
    editing: liveEditingReducer
  },
  middleware: [ socketIoMiddleware ]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
