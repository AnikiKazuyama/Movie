import React from 'react';

import Movie from '../components/movie';

import { connect } from 'react-redux';

import { getUrl } from '../util/urlApi';

import { fetchMovieIfNeeded } from '../actions/movieActions';

import { getMovie, getCredits, getError, getIsFetching } from '../selectors/getMovieData'

const MovieContainer = (props) => 
    <Movie { ...props }/>;

const mapStateToProps = (state) => {
    return {
        movie: getMovie(state),
        credits: getCredits(state),
        error: getError(state), 
        isFetching: getIsFetching(state),
        url: getUrl(state),
        location: state.routing.location
    } 
}   

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (id, url) => {
            dispatch(fetchMovieIfNeeded(id, url));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
