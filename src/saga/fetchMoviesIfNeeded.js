import { call, put, select  } from 'redux-saga/effects';

import { fetchDataSuccess, fetchData } from '../actions/categoryActions';

import callApi from '../util/apiUtils';

function* fetchMovies(category, page, url){
    const movies   = yield call( callApi, url); 
    yield put(fetchDataSuccess(category, page, movies));
}

export default function* fetchMoviesIfNeeded(action){
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