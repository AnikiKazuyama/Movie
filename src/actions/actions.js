import * as ActionTypes from '../constants/AsyncActions';
import { SELECTED_BY } from "../constants/Actions";

export function fetchData(category){
    return {
        type: ActionTypes.FETCH_DATA,
        category
    }
}

export function fetchDataSuccess(data, category){
    return {
        type: ActionTypes.FETCH_DATA_SUCCESS,
        data,
        category
    }
}

export function selectBy(category){
    return{
        type: SELECTED_BY, 
        category
    }
}