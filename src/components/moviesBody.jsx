import React from 'react';

import Loader from './loader';
import MoviesBodyRender from './moviesBodyRender';
import NoMatch from './nomatch';

const MoviesBody = (props) => {

        const { isFetching, movies, match } = props;

        if(movies.error){
            return <NoMatch error = { movie.error }/>
        }

        return(
            <div className="moviesBody">
                <Loader isFetching = { isFetching }/>
                <MoviesBodyRender movies = { movies }/>
            </div>       
        )
    
}

export default MoviesBody;