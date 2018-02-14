import { call, put, select  } from 'redux-saga/effects';

import { fetchPersonSuccess, fetchPerson } from '../actions/personActions';

import callApi from '../util/apiUtils';

function* fetchPersonSaga(id, url){  
    let person   = yield call(callApi, url);
    yield put(fetchPersonSuccess(id, person));
}

export default function* fetchPersonIfNeeded(action){
    const id         = action.id;
    const url        = action.url;
    const state      = yield select();
    const personExist = id in state.person;
    if(!personExist){
        yield put(fetchPerson(id, url))
        yield call(fetchPersonSaga, id, url); 
    }
}