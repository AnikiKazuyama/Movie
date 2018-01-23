import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS } from '../constants/movieActions';

export function fetchMovie(id, url){
    return {
        type: FETCH_MOVIE,
        id, 
        url
    }
}

export function fetchMovieSuccess(id, data){
    return {
        type: FETCH_MOVIE_SUCCESS,
        id,
        data 
    }
}