import React from 'react';

import Movie from '../components/movie';
import { connect } from 'react-redux';

import { getUrl } from '../util/urlApi';

import { fetchMovie } from '../actions/movieActions';

import { getMovie, getIsFetching } from '../selectors/getMovieData';

const MovieContainer = (props) => 
    <Movie { ...props }/>;

const mapStateToProps = (state) => {
    return {
        movie: getMovie(state),
        isFetching: getIsFetching(state),
        url: getUrl(state),
        location: state.routing.location
    } 

}   

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (id, url) => dispatch(fetchMovie(id, url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
