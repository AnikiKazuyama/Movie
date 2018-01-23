import React from 'react';

import MovieBody from './movieBody';
import NoMatch from './nomatch';

import { imgPath } from '../util/img';

import { IMGSIZE1000 } from '../constants/movies'

class Movie extends React.Component {
    componentWillMount(){
        const { url, fetch, match } = this.props;
        const id = match.params.id
        fetch(id, url);
    }

    render(){
        const { match, movie, isFetching } = this.props;
        const {
            poster_path, 
            title,
            overview, 
            backdrop_path
        } = movie;

        if(movie.error){
            return <NoMatch error = { movie.error }/>
        }

        if(movie){
            const bgImg = {
                backgroundImage: `url(${imgPath(IMGSIZE1000, backdrop_path)})`
            }
            return (
                <div className = 'movie'>
                    <div className="movie__custom-bg" style = { bgImg }>
                        <div className = 'container'>
                            <MovieBody isFetching  = { isFetching }
                                    poster_path    = { poster_path }
                                    title          = { title }
                                    overview       = { overview }
                                    backdrop_path  = { backdrop_path }  
                                    />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Movie;