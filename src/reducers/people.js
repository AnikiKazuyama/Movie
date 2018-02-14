import { FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS } from '../constants/peopleActions';

const initState = {
    page: null, 
    total_pages: null, 
    total_results: null, 
    results: [], 
    isFetching: false
}

export function page(state = initState, action){
    switch(action.type){
        case FETCH_PEOPLE:
            return {
                ...state, 
                isFetching: true
            }
        case FETCH_PEOPLE_SUCCESS: 
            return {
                ...state, 
                isFetching: false, 
                ...action.data 
            }  
    }
}

export default function people(state = { }, action){
    switch(action.type){
        case FETCH_PEOPLE:
        case FETCH_PEOPLE_SUCCESS: 
            return{
                ...state, 
                [action.page]: page(state[action.page], action)
            };
        default: 
            return state;
    }
}