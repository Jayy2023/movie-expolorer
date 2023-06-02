import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './search';
import watcherSaga from '../sagas';
import createSagaMiddleware from '@redux-saga/core';
import genresReducer from './genres';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        search: searchReducer,
        genres: genresReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({think: false}).prepend(sagaMiddleware);
    }
});

sagaMiddleware.run(watcherSaga);

export default store;
