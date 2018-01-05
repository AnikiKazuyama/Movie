import React from 'react';

import MovieCard from './movieCard';

const MoviesBodyRender = (props) => {
    const { movies } = props;

    return movies.map((movie) => {
        const { poster_path, title, vote_average, vote_count, id } = movie; 

        return <MovieCard key = { id } poster_path = { poster_path } title = { title } vote_average = { vote_average } vote_count = { vote_count } />;
    })
}

export default MoviesBodyRender;