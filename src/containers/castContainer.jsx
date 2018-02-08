import React from 'react';

import { connect } from 'react-redux';

import { fetchCredits } from '../actions/creditsActions';
import { fetchMovie, fetchMovieIfNeeded } from '../actions/movieActions';

import Cast from '../components/cast';

import { getCast, getCrew, getIsFetching } from '../selectors/getCastData';
import { getUrl } from '../util/urlApi';
import { getMovie } from '../selectors/getMovieData';

const CastContainer = (props) => {
    return <Cast { ...props }/>
}

const mapStateToProps = (state) => {
    return {
        movie: getMovie(state),
        cast: getCast(state),
        crew: getCrew(state),
        url: getUrl(state), 
        creditsUrl: getUrl(state, 'credits'), 
        isFetching: getIsFetching(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (id, url, creditsUrl) => {
            dispatch(fetchMovieIfNeeded(id, url));
            // dispatch(fetchCredits(id, creditsUrl))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CastContainer);