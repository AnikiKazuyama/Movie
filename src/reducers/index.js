import { combineReducers } from 'redux';
import movies from './moviesFetch';
import selectedBy from './selectedBy';

 const root = combineReducers({
    selectedBy,
    movies
});

export default root;