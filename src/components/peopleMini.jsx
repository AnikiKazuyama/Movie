import React from 'react';

import PersonCard from './personCard';

import { Link } from 'react-router-dom';

export default function PeopleMini(props) {

    const { cast, location, match } = props;
    
    const popularCasts = cast.map((person, index) => {
        if(index < 4){
            const {
                character, 
                name, 
                profile_path,
                id
            } = person;
    
            return <PersonCard character     = { character }
                               name          = { name }
                               profile_path  = { profile_path }
                               id            = { id } 
                               key           = { index } />
        }
        return null;
    });

    return(
        <div className = 'people'>
            <h3 className="people__title">Актеры</h3>
                <div className = 'people__popular-casts'>
                    { popularCasts }
                </div>
            <Link className = "people__more" to = {`/${match.params.id}/cast`}>Еще</Link>
        </div>
    );
}