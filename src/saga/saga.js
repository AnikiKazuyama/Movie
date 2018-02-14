import { takeEvery } from 'redux-saga/effects';

import fetchMovieIfNeeded from './fetchMovieIfNeeded';
import { FETCH_MOVIE_IF_NEEDED } from '../constants/movieActions';

import fetchMoviesIfNeeded from './fetchMoviesIfNeeded';
import { FETCH_MOVIES_IF_NEEDED } from '../constants/AsyncActions';

import fetchPeopleIfNeeded from './fetchPeopleIfNeeded';
import { FETCH_PEOPLE_IF_NEEDED } from '../constants/peopleActions';

import fetchPersonIfNeeded from './fetchPersonIfNeeded';
import { FETCH_PERSON_IF_NEEDED } from '../constants/personActions';

export default function* watchFetch(){
    yield takeEvery(FETCH_MOVIES_IF_NEEDED, fetchMoviesIfNeeded);
    yield takeEvery(FETCH_MOVIE_IF_NEEDED, fetchMovieIfNeeded);
    yield takeEvery(FETCH_PEOPLE_IF_NEEDED, fetchPeopleIfNeeded);
    yield takeEvery(FETCH_PERSON_IF_NEEDED, fetchPersonIfNeeded);
}