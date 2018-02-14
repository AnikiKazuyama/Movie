import { FETCH_PEOPLE_IF_NEEDED, FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS } from '../constants/peopleActions';

export  function fetchPeopleIfNeeded(page, url){
    return {
        type: FETCH_PEOPLE_IF_NEEDED, 
        page, 
        url
    }
}

export function fetchPeople(page){
    return {
        type: FETCH_PEOPLE, 
        page
    }
}

export function fetchPeopleSuccess(page, data){
    return {
        type: FETCH_PEOPLE_SUCCESS, 
        page, 
        data
    }
}