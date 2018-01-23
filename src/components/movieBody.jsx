import React from 'react';

import Loader from './loader';
import MovieBodyRender from './movieBodyRender';

const MovieBody = (props) => {
    const { isFetching, poster_path, title, overview, backdrop_path } = props;

    return (
        isFetching ? 
        <Loader isFetching = { isFetching }/> :
        <MovieBodyRender poster_path = { poster_path } title = { title } overview = { overview } backdrop_path = { backdrop_path }/>
    );
}

export default MovieBody;