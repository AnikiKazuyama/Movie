import React from 'react';
import { Link } from 'react-router-dom';

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
            {/* <div className = "movieCard__poster"> */}
                <Link to = { `/${ id }` } className = 'movieCard__poster'>
                    <img src = { imgPath(IMGSIZE1000, poster_path) } alt = { title }/>
                </Link>
            {/* </div> */}
            
            {/* <div className = 'movieCard__description'> */}
                <Link to = { `/${ id }` } className = 'movieCard__description'>
                    <div className = 'movieCard__title'>{ title }</div>
                    <div className = 'movieCard__averageRating'>{ vote_average }</div>
                </Link>
            {/* </div> */}
            
        </div>
    );
}

export default MovieCard