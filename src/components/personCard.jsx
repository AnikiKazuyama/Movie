import React from 'react';

import { Link } from 'react-router-dom';

import Img from './img';

import { imgPath } from '../util/img';
import { IMGSIZE1000 } from '../constants/movies'; 

export default class PersonCard extends React.Component{

    render(){
        const {
            character, 
            name, 
            profile_path,
            id
        } = this.props;

        return(
            <div className = 'person-card'>
                <Link to = { `/person/${id}` } className="person-card__photo" ref = { (photoContainer) => this.photoContainer = photoContainer }>
                    <Img src = { imgPath(IMGSIZE1000, profile_path) } alt={ name } /> 
                </Link>
                <Link to = { `/person/${id}` } className="person-card__description">
                    <div className="person-card__name">{ name }</div>
                    { character ? <div className="person-card__character-name">{ character }</div> : null }
                </Link>
            </div>
        );
    }
}