import React from 'react';
import { connect } from 'react-redux';

import Movies from '../components/movies';

import { selectBy, fetchData } from "../actions/actions";

import { isFetching, movies } from '../selectors/getMoviesData';


const MovieContainer = (props) => {
    return <Movies { ...props }/>
}

const mapStateToProps = (state, ownProps) => {   
    return {
        movies: movies(state),
        isFetching: isFetching(state), 
        selectedBy: state.selectedBy,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetch: (category) => {
            dispatch(selectBy(category))
            dispatch(fetchData(category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
