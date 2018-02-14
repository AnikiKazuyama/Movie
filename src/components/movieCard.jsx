import React from 'react';
import { Link } from 'react-router-dom';

import Img from './img';

import { imgPath } from '../util/img'
import { IMGSIZE1000 } from '../constants/movies'; 

const MovieCard = (props) => {
    const { 
            id,
            poster_path,
            title,
            vote_average,
            vote_count
         } = props;

    return (
        <div className = 'movieCard'>
                <Link to = { `/${ id }` } className = 'movieCard__poster'>
                    <Img src = { imgPath(IMGSIZE1000, poster_path) } alt = { title }/>
                </Link>
            
                <Link to = { `/${ id }` } className = 'movieCard__description'>
                    <div className = 'movieCard__title'>{ title }</div>
                </Link>
            
        </div>
    );
}

export default MovieCard