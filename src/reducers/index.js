import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './moviesFetch';
import movie from './movie';
import credits from './credits';
import people from './people';
import person from './person';

 const root = combineReducers({
    movies,
    movie, 
    credits,
    people,
    person,
    routing: routerReducer
});

export default root;