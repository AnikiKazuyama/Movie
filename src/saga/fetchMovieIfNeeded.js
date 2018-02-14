import { call, put, select  } from 'redux-saga/effects';

import { fetchMovieSuccess, fetchMovie } from '../actions/movieActions';
import { fetchCredits, fetchCreditsSuccess } from '../actions/creditsActions';

import callApi from '../util/apiUtils';

function* fetchMovieSaga(id, url){  
    let movie   = yield call(callApi, url);
    const credits = movie.credits;
    movie.credits = id;
    yield put(fetchCreditsSuccess(id, credits));
    yield put(fetchMovieSuccess(id, movie));
}

export default function* fetchMovieIfNeeded(action){
    const id         = action.id;
    const url        = action.url;
    const state      = yield select();
    const movieExist = id in state.movie;
    if(!movieExist){
        yield put(fetchCredits(id, url));
        yield put(fetchMovie(id, url));
        yield call(fetchMovieSaga, id, url); 
    }
}