import React from 'react';     
import { Switch, Route,  } from 'react-router-dom';

import MoviesContainer from '../containers/MoviesContainer';
import MovieContainer from '../containers/movieContainer';
import MovieInner from './movieInner';
import NoMatch from './nomatch';

export default class Main extends React.Component{
    render(){
        return (
            <main >
                <Switch>
                    <Route exact path = '/' component = { MoviesContainer }/>
                    <Route exact path = '/upcoming' component = { MoviesContainer }/>
                    <Route exact path = '/now_playing' component = { MoviesContainer }/>
                    <Route  path = '/:id' component = { MovieInner }/>
                </Switch>
            </main>
        )
            
    }
}