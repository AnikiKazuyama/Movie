import React from 'react';

import Loader from './loader';
import MoviesBodyRender from './moviesBodyRender';
import NoMatch from './nomatch';

const MoviesBody = (props) => {

        const { isFetching, movies, match } = props;

        if(movies.error){
            return <NoMatch error = { movie.error }/>
        }

        if( isFetching ){
            return <Loader isFetching = { isFetching }/>
        }

        return(
            <div className="moviesBody">
                <MoviesBodyRender movies = { movies }/>
            </div>       
        )
    
}

export default MoviesBody;