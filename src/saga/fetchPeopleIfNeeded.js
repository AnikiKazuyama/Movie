import { call, put, select  } from 'redux-saga/effects';

import { fetchPeopleSuccess, fetchPeople } from '../actions/peopleActions';

import callApi from '../util/apiUtils';

function* fetchPeopleSaga(page, url){  
    let people = yield call(callApi, url);
    yield put(fetchPeopleSuccess(page, people));
}

export default function* fetchPeopleIfNeeded(action){
    const page        = action.page;
    const url         = action.url;
    const state       = yield select();
    const peopleExist = page in state.people;
    if(!peopleExist){
        yield put(fetchPeople(page))
        yield call(fetchPeopleSaga, page, url); 
    }
}