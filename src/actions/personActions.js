import { FETCH_PERSON_IF_NEEDED, FETCH_PERSON, FETCH_PERSON_SUCCESS } from '../constants/personActions';

export  function fetchPersonIfNeeded(id, url){
    return {
        type: FETCH_PERSON_IF_NEEDED, 
        id, 
        url
    }
}

export function fetchPerson(id){
    return {
        type: FETCH_PERSON, 
        id
    }
}

export function fetchPersonSuccess(id, data){
    return {
        type: FETCH_PERSON_SUCCESS, 
        id, 
        data
    }
}