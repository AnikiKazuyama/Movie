// import axios from 'axios';
// import { call, put, takeEvery, takeLatest, select  } from 'redux-saga/effects';
// import * as Api from '../constants/Api';
// import { FETCH_DATA } from '../constants/AsyncActions';

// import apiRequest from '../util/urlApi';
// import { fetchDataSuccess } from '../actions/actions';

// function fetch(category, page){
//     // console.log(page)
//     return axios.get(apiRequest({ category, page }))
//                 .then(response => response.data)
//                 .catch(error => {
//                     console.log(error.response)
//                     if(error.response){
//                         console.log(error.response.data);
//                         console.log(error.response.status);
//                     } else if (error.request) {
//                         console.log(error.request);
//                     }else {
//                         // Something happened in setting up the request that triggered an Error
//                         console.log('Error', error.message);
//                     }
//                     console.log(error.config);
//                 });
// }

// function* fetchMovies(action){
//     const category = action.category;
//     const page = action.page;
//     const movies = yield call( fetch, category, page);
//     const state = yield select();
    
//     if(state.movies[category].results){
//         try{
//             yield put(fetchDataSuccess(movies, category));
//         } catch(e) {

//         }
//     }
    
     
// }

// export default function* watchFetch(){
//     yield takeEvery(FETCH_DATA, fetchMovies);
// }

import axios from 'axios';
import { call, put, takeEvery, takeLatest, select  } from 'redux-saga/effects';
import * as Api from '../constants/Api';
import { FETCH_MOIVES_IF_NEEDED, FETCH_NEXT_MOIVES_IF_NEEDED } from '../constants/AsyncActions';

import apiRequest from '../util/urlApi';
import { fetchData, fetchDataSuccess, fetchMoviesIfNeeded } from '../actions/actions';

import queryStrToObj from '../util/urlUtils';

function fetchh(url){
    return axios.get(url)
                .then(response => response.data)
                .then(data => data)
                .catch(error => {
                    console.log(error.response)
                    if(error.response){
                        console.log(error.response.data);
                        console.log(error.response.status);
                    } else if (error.request) {
                        console.log(error.request);
                    }else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
}

function* fetch(category, url){
    yield put(fetchData(category));
    const movies = yield call(fetchh, url);
    yield put(fetchDataSuccess(category, movies));
}

function* fetchIfNeeded(action){
    const { category, url } = action;
    const state = yield select();
    const movies = state.movies;
    const categoryExist = category in movies;
    const categoryIsFetching =  categoryExist ? movies[category].isFetching : false;
    // const categoryHasItems = categoryExist ? movies[category].results.length : false;
    const shouldMoviesFetch = (!categoryExist || !categoryIsFetching);
    if(shouldMoviesFetch){
        yield call(fetch, category, url);
    }  
}

function* fetchNextIfNeeded(action){
    const { category, url } = action;
    const state = yield select();
    const movies = state.movies;
    const categoryExist = category in movies;
    const categoryIsFetching =  categoryExist ? movies[category].isFetching : false;
    const shouldMoviesFetch = categoryExist && !categoryIsFetching;
    if(shouldMoviesFetch){
        yield call(fetch, category, url);
    }
}

export default function* watchFetch(){
    yield takeEvery(FETCH_MOIVES_IF_NEEDED, fetchIfNeeded);
    yield takeEvery(FETCH_NEXT_MOIVES_IF_NEEDED, fetchNextIfNeeded);
}