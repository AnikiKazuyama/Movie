import React from 'react';

import PersonCard from './personCard';

import Loader from './loader';

export default function PeopleBody(props) {

    const { people, isFetching } = props;

    if(isFetching){
        return <Loader isFetching/>
    }

    const allPeople = people.map( person => {
        return <PersonCard name         = { person.name }
                           profile_path = { person.profile_path } 
                           key          = { person.id }
                           id           = { person.id }/>
    }) 

    return(
        <div className="moviesBody">
            { allPeople }
        </div>
        
    );
}