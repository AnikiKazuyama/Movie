import React from 'react';

import { Link } from 'react-router-dom';

import { imgPath } from '../util/img';
import { IMGSIZE1000 } from '../constants/movies';

export default function backToMovie(props){
    const { id, poster_path, title } = props;

    return(
        <div className="back-to-movie">
            <div className="poster container">
                <div className="poster-mini">
                    <Link to = { `/${id}` }>
                        <img src={imgPath(IMGSIZE1000, poster_path)} alt={title}/>
                    </Link>
                </div>
                <div className = "poster__right">
                    <h3 className="poster__title">{<Link to = { `/${id}` }>{ `${title}` }</Link>}</h3>
                    <Link to = { `/${id}` } >&larr;{`Вернуться к фильму`}</Link>
                </div>
            </div>
        </div>
    );
}