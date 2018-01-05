import React from 'react';

import Loader from './loader';
import MoviesBodyRender from './moviesBodyRender';

const MoviesBody = (props) => {

        const { isFetching, movies } = props;

        return(
            <div className="moviesBody">
                <Loader isFetching = { isFetching }/>
                <MoviesBodyRender movies = { movies }/>
            </div>       
        )
    
}

export default MoviesBody;