import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_IF_NEEDED } from '../constants/movieActions';

export function fetchMovieIfNeeded(id, url){
    return {
        type: FETCH_MOVIE_IF_NEEDED, 
        id, 
        url
    }
}

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

