import * as ActionTypes from '../constants/AsyncActions';

const initialState = {
    page: null, 
    total_pages: null, 
    total_results: null, 
    results: [], 
    isFetching: false
};

function page(state = initialState, action){
    switch (action.type){
        case ActionTypes.FETCH_DATA:
            return {
                ...state, 
                isFetching: true
            }

        case ActionTypes.FETCH_DATA_SUCCESS: 
            return {
                ...state, 
                ...action.data, 
                isFetching: false
            };
            
        default: 
            return state;
    }
} 

function category(state = {} , action){
    switch (action.type){
        case ActionTypes.FETCH_DATA:
        case ActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                [action.page]: page(state[action.page], action)
            };
        default: 
            return state;
    }
}

export default function movies (state = {}, action) {
    switch (action.type){
        case ActionTypes.FETCH_DATA:
        case ActionTypes.FETCH_DATA_SUCCESS: 
            return {
                ...state, 
                [action.category]: category(state[action.category], action),
            };
            
        default: 
            return state;
    }
}

