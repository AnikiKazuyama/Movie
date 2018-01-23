import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS } from '../constants/movieActions';

function id(state = { }, action){
    switch(action.type){
        case FETCH_MOVIE: 
            return {
                ...state, 
                isFetching: true
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state, 
                ...action.data,
                isFetching: false
            }
        default: 
            return state;
    }
}

export default function movie(state = { }, action){
    switch(action.type){
        case FETCH_MOVIE: 
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state, 
                [action.id]: id(state[action.id], action)    
            }
        default: 
            return state;
    }
}