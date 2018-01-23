import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './moviesFetch';
import movie from './movie';

 const root = combineReducers({
    movies,
    movie, 
    routing: routerReducer
});

export default root;