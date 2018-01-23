import axios from 'axios';
import { call, put, takeEvery, takeLatest, select  } from 'redux-saga/effects';
import * as Api from '../constants/Api';
import { FETCH_DATA } from '../constants/AsyncActions';
import { FETCH_MOVIE } from '../constants/movieActions';

import apiRequest from '../util/urlApi';
import { fetchDataSuccess } from '../actions/categoryActions';
import { fetchMovieSuccess } from '../actions/movieActions';

import callApi from '../util/apiUtils';

function* fetchMovies(action){
    const category = action.category;
    const url      = action.url;
    const movies   = yield call( callApi, url);  
    yield put(fetchDataSuccess(category, movies));
}

function* fetchMovie(action){
    const id    = action.id;
    const url   = action.url;
    const movie = yield call(callApi, url);
    yield put(fetchMovieSuccess(id, movie));
}

export default function* watchFetch(){
    yield takeEvery(FETCH_DATA, fetchMovies);
    yield takeEvery(FETCH_MOVIE, fetchMovie);
}