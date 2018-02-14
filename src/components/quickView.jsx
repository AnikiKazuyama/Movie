import React from 'react';

import { imgPath } from '../util/img';
import { IMGSIZE1000 } from '../constants/movies';

export default function QuickView(props){

    const {
        poster_path, 
        title,
        overview, 
        backdrop_path
    } = props;

    const bgImg = {
        backgroundImage: `url(${imgPath(IMGSIZE1000, backdrop_path)})`
    }
    
    return(
        <div className="movie__custom-bg" style = { bgImg }>
            <div className = 'container'>
                <div className="movie__content">
                    <div className="movie__poster">
                        <img src={ imgPath(IMGSIZE1000, poster_path) } alt=""/>
                    </div>

                    <div className="movie__info">
                        <h2 className = 'movie__title'>{ title }</h2>

                        <div className = 'movie__description'>
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
        </div>
    );
}