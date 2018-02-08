import React from 'react';

import Movie from '../components/movie';
import { connect } from 'react-redux';

import { getUrl } from '../util/urlApi';

import { fetchMovie, fetchMovieIfNeeded } from '../actions/movieActions';
import { fetchCredits } from '../actions/creditsActions';

import getMovieData from '../selectors/getMovieData'

const MovieContainer = (props) => 
    <Movie { ...props }/>;

const mapStateToProps = (state) => {
    return {
        ...getMovieData(state),
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
