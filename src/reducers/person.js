import { FETCH_PERSON, FETCH_PERSON_SUCCESS } from '../constants/personActions';

function id(state = { }, action){
    switch(action.type){
        case FETCH_PERSON: 
            return {
                ...state, 
                isFetching: true
            }
        case FETCH_PERSON_SUCCESS:
            return {
                ...state, 
                ...action.data,
                isFetching: false
            }
        default: 
            return state;
    }
}

export default function person(state = { }, action){
    switch(action.type){
        case FETCH_PERSON: 
        case FETCH_PERSON_SUCCESS:
            return {
                ...state, 
                [action.id]: id(state[action.id], action)    
            }
        default: 
            return state;
    }
}