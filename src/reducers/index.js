import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './moviesFetch';
import movie from './movie';
import credits from './credits';

 const root = combineReducers({
    movies,
    movie, 
    credits,
    routing: routerReducer
});

export default root;