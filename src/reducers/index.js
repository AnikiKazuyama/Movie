import { combineReducers } from 'redux';
import movies from './moviesFetch';
import selectedBy from './selectedBy';
import { routerReducer } from 'react-router-redux';

 const root = combineReducers({
    movies, 
    routing: routerReducer
});

export default root;