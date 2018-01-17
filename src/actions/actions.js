import * as ActionTypes from '../constants/AsyncActions';
import { SELECTED_BY } from "../constants/Actions";
import { POPULAR } from '../constants/Api';
import { FETCH_MOIVES_IF_NEEDED, FETCH_NEXT_MOIVES_IF_NEEDED } from '../constants/AsyncActions';

export function fetchData(category){
    return {
        type: ActionTypes.FETCH_DATA,
        category
    }
}

export function fetchDataSuccess(category, data){

    return {
        type: ActionTypes.FETCH_DATA_SUCCESS,
        data,
        category
    }
}

export function fetchMoviesIfNeeded(category, url){
    return{
        type: FETCH_MOIVES_IF_NEEDED, 
        category,
        url
    }
}

export function fetchNextMoviesIfNeeded(category, url){
    return{
        type: FETCH_NEXT_MOIVES_IF_NEEDED, 
        category,
        url
    }
}