import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// Import your root reducer and root saga
import rootReducer from './root-reducer'; // Assuming you have a rootReducer
import {songs} from './app.sagas'; // Assuming you have sagas

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create and configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }) // Disable thunk if using saga
      .concat(sagaMiddleware)
      .concat(logger), // Add any other middlewares you want
});

// Run the saga
sagaMiddleware.run(songs);

// Export the store
export { store };
