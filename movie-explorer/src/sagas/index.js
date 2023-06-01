import {delay, all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';

function* fetchSearchMovies(action){
    yield delay(500);
}