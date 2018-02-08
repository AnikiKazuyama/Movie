import React from 'react';
import { connect } from 'react-redux';

import Movies from '../components/movies';

import { fetchMoviesIfNeeded } from "../actions/categoryActions"

import { getIsFetching, getMovies, getPage, getTotal_pages, getCategory } from '../selectors/getMoviesData';

import { getUrl } from '../util/urlApi';
import { fetchMovieIfNeeded } from '../actions/movieActions';

const MoviesContainer = (props) => {
    return <Movies { ...props }/>
}

const mapStateToProps = (state, ownProps) => {   
    return {
        movies: getMovies(state),
        isFetching: getIsFetching(state), 
        page: getPage(state),
        total_pages: getTotal_pages(state),
        url: getUrl(state),
        category: getCategory(state), 
        location: state.routing.location
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchCategory: (category, page, url) => {
            dispatch(fetchMoviesIfNeeded(category, page, url));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
