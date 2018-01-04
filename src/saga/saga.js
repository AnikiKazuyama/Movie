import axios from 'axios';
import { call, put, takeEvery, takeLatest, select  } from 'redux-saga/effects';
import * as Api from '../constants/Api';
import { FETCH_DATA } from '../constants/AsyncActions';

import apiRequest from '../util/urlApi';
import { fetchDataSuccess } from '../actions/actions';

function fetch(category){
    return (
        axios.get(apiRequest({category})).then(response => response.data  )
    )
    
}

function* fetchMovies(action){
    const category = action.category;
    const movies = yield call( fetch, category);
    const state = yield select();
    console.log(category)
    console.log(state.movies[category].results)
    if(state.movies[category].results){
        try{
            yield put(fetchDataSuccess(movies, category));
        } catch(e) {
            console.log(e);
        }
    }
    
     
}

export default function* watchFetch(){
    yield takeEvery(FETCH_DATA, fetchMovies);
}