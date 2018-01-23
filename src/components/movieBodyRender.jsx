import React from 'react';

import { imgPath } from '../util/img'

import { IMGSIZE1000 } from '../constants/movies'; 

const MovieBodyRender = (props) => {
    const { poster_path,
            title, 
            overview, 
            backdrop_path 
          } = props;

    return (
        <div className="movie__content">
            <div className="movie__poster">
                <img src={ imgPath(IMGSIZE1000, poster_path) } alt=""/>
            </div>
            <div className="movie__info">
                <div className="movie__title">
                    <span>
                        <h2>{ title }</h2>
                    </span>
                </div>
                <div className = 'movie__description'>
                    <div>
                        <h2>Описание</h2>
                        <div className="overview">
                            <p>
                                { overview }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default MovieBodyRender;