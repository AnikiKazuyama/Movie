import * as ActionTypes from '../constants/AsyncActions';
import { POPULAR } from '../constants/Api';
import { FETCH_MOIVES_IF_NEEDED, FETCH_NEXT_MOIVES_IF_NEEDED } from '../constants/AsyncActions';

export function fetchMoviesIfNeeded(category, page, url){
    return{
        type: FETCH_MOIVES_IF_NEEDED, 
        category, 
        page, 
        url
    }
}

export function fetchData(category, page){
    return {
        type: ActionTypes.FETCH_DATA,
        category, 
        page
    }
}

export function fetchDataSuccess(category, page, data){
    return {
        type: ActionTypes.FETCH_DATA_SUCCESS,
        data,
        category,
        page
    }
}