import * as ActionTypes from '../constants/AsyncActions';
import { POPULAR } from '../constants/Api';
import { FETCH_MOIVES_IF_NEEDED, FETCH_NEXT_MOIVES_IF_NEEDED } from '../constants/AsyncActions';

export function fetchData(category, url){
    return {
        type: ActionTypes.FETCH_DATA,
        category, 
        url
    }
}

export function fetchDataSuccess(category, data){

    return {
        type: ActionTypes.FETCH_DATA_SUCCESS,
        data,
        category
    }
}