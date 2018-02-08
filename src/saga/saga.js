import axios from 'axios';
import { call, put, takeEvery, takeLatest, select  } from 'redux-saga/effects';
import * as Api from '../constants/Api';

import { FETCH_DATA, FETCH_MOIVES_IF_NEEDED } from '../constants/AsyncActions';
import { FETCH_MOVIE, FETCH_MOVIE_IF_NEEDED } from '../constants/movieActions';

import apiRequest from '../util/urlApi';
import { fetchDataSuccess, fetchData } from '../actions/categoryActions';
import { fetchMovieSuccess, fetchMovie } from '../actions/movieActions';
import { fetchCreditsSuccess } from '../actions/creditsActions';

import callApi from '../util/apiUtils';

function* fetchMovies(category, page, url){
    const movies   = yield call( callApi, url); 
    yield put(fetchDataSuccess(category, page, movies));
}

function* fetchMoviesIfNeeded(action){
    const category = action.category;
    const page     = action.page;
    const url      = action.url; 
    const state    = yield select();
    const movies   = state.movies;
    const categoryExist = category in movies;
    const pageExist = categoryExist ? page in movies[category] : false;
    if( !pageExist ){
        yield put(fetchData(category, page, url));
        yield call(fetchMovies, category, page, url);
    }
}

function* fetchMovieSaga(id, url){  
    let movie   = yield call(callApi, url);
    const credits = movie.credits;
    movie.credits = id;
    yield put(fetchMovieSuccess(id, movie));
    yield put(fetchCreditsSuccess(id, credits));
}

function* fetchMovieIfNeeded(action){
    const id         = action.id;
    const url        = action.url;
    const state      = yield select();
    const movieExist = id in state.movie;
    if(!movieExist){
        yield put(fetchMovie(id, url))
        yield call(fetchMovieSaga, id, url); 
    }
}

export default function* watchFetch(){
    yield takeEvery(FETCH_MOIVES_IF_NEEDED, fetchMoviesIfNeeded);
    yield takeEvery(FETCH_MOVIE_IF_NEEDED, fetchMovieIfNeeded);
}