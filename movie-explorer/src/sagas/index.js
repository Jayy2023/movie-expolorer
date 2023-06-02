// import {delay, all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
// import { fetchedSearchMovies, searchMovies } from '../redux/search';
// import { API_KEY } from '../config';
// import TheMovieDbApi from '../lib/api';
// import { fetchedGenres, getGenres } from '../redux/genres';
// import { getPopularMovies, fetchedPopularMovies } from '../redux/movies';

// const api = new TheMovieDbApi(API_KEY);
// function* fetchGenres(){
//     yield put(fetchedGenres(yield call(api.getGenres)))
// }

// function* fetchSearchMovies(action){
//     yield delay(500);
//     yield put(
//         fetchedSearchMovies(yield call(api.searchMovies, action.payload))
//     );

// }
// function* fetchPopularMovies(action){
//  yield put(
//     fetchedPopularMovies(
//         yield call(api.getPopularMovies, action.payload)
//     )
//  )

// }
// export default function* watcherSaga(){
//     yield all([
//          takeEvery(getPopularMovies.type, fetchPopularMovies),
//          takeEvery(getGenres.type, fetchGenres),
//          takeLatest(searchMovies.type, fetchSearchMovies)
//     ])
// }
import { delay, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchedSearchMovies, searchMovies } from '../redux/search';
import { API_KEY } from '../config';
import TheMovieDbApi from '../lib/api';
import { fetchedGenres, getGenres } from '../redux/genres';
import { fetchedPopularMovies, getPopularMovies } from '../redux/movies';

const api = new TheMovieDbApi(API_KEY);

function* fetchGenres() {
  const genres = yield call(api.getGenres);
  yield put(fetchedGenres(genres));
}

function* fetchSearchMovies(action) {
  yield delay(500);
  const searchResults = yield call(api.searchMovies, action.payload);
  yield put(fetchedSearchMovies(searchResults));
}

function* fetchPopularMovies(action) {
  const popularMovies = yield call(api.getPopularMovies, action.payload);
  yield put(fetchedPopularMovies(popularMovies));
}

export default function* watcherSaga() {
  yield takeEvery(getPopularMovies.type, fetchPopularMovies);
  yield takeEvery(getGenres.type, fetchGenres);
  yield takeLatest(searchMovies.type, fetchSearchMovies);
}
