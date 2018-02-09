import React from 'react';

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
                <div className="person-card__photo" ref = { (photoContainer) => this.photoContainer = photoContainer }>
                    <Img src = { imgPath(IMGSIZE1000, profile_path) } alt={ name } /> 
                </div>
                <div className="person-card__description">
                    <div className="person-card__name">{ name }</div>
                    <div className="person-card__character-name">{ character }</div>
                </div>
            </div>
        );
    }
}