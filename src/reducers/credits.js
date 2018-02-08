import { FETCH_CREDITS, FETCH_CREDITS_SUCCESS } from '../constants/creditsActions';

const initialState = {
    crew: [], 
    cast: [], 
    isFetching: false
}

function id(state = initialState, action){
    switch(action.type){
        case FETCH_CREDITS:
            return{
                ...state,
                isFetching: true
            }
        case FETCH_CREDITS_SUCCESS:
            return{
                ...state,
                isFetching: false, 
                ...action.data
            }
        default: 
            return state;
    }
}

export default function credits(state = {}, action){
    switch(action.type){
        case FETCH_CREDITS:
        case FETCH_CREDITS_SUCCESS:
            return {
                ...state, 
                [action.id]: id(state[action.id], action)
            }
        default: 
            return state;
    }
}