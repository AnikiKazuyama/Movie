import React from 'react';

import { Switch, Route,  } from 'react-router-dom';

import PersonContainer from '../containers/personContainer';
import PeopleContainer from '../containers/peopleContainer';

const PersonRouting = (props) => {
    return(
        <Switch>
            <Route exact path = '/person' component = { PeopleContainer }/>
            <Route path = '/person/:id' component = { PersonContainer }/>
        </Switch>
        
    );
}

export default PersonRouting;