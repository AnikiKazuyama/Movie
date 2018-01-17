import React from 'react';
import { connect } from 'react-redux';

import Movies from '../components/movies';

import { selectBy, fetchData, fetchMoviesIfNeeded, fetchNextMoviesIfNeeded } from "../actions/actions";

import { getIsFetching, getMovies, getPage, getTotal_pages, getCategory } from '../selectors/getMoviesData';

import { getUrl } from '../util/urlApi';

const MovieContainer = (props) => {
    // console.log(props.location);
    // console.log(props.match);
    return <Movies { ...props }/>
}

const mapStateToProps = (state, ownProps) => {   
    // const category = ownProps.match.params.category || 'popular' ;
    return {
        movies: getMovies(state),
        isFetching: getIsFetching(state), 
        page: getPage(state),
        total_pages: getTotal_pages(state),
        url: getUrl(state),
        category: getCategory(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        // fetch: (category, page) => {
        //     dispatch(fetchData(category, page));
        // },

        fetchIfNeeded: (category, url) => {
            dispatch(fetchMoviesIfNeeded(category, url))
        },

        fetchNextIfNeeded: (category, url) => {
            dispatch(fetchNextMoviesIfNeeded(category, url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
