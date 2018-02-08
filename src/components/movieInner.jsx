import React from 'react';     
import { Switch, Route,  } from 'react-router-dom';

import MoviesContainer from '../containers/MoviesContainer';
import MovieContainer from '../containers/movieContainer';
import CastContainer from '../containers/castContainer';

export default class MovieInner extends React.Component{
    render(){
        return (
                <Switch>
                    <Route exact path = '/:id' component = { MovieContainer }/>
                    <Route path = '/:id/cast' component = { CastContainer }/>
                </Switch>
        )
            
    }
}