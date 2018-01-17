import React from 'react';     
import { Switch, Route, Redirect } from 'react-router-dom';

import MoviesContainer from '../containers/MoviesContainer';

export default class Main extends React.Component{
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path = '/popular' component = { MoviesContainer }/>
                    <Route exact path = '/upcoming' component = { MoviesContainer }/>
                    <Route exact path = '/now_playing' component = { MoviesContainer }/>
                    <Redirect from = '/' to = '/popular'/>
                </Switch>
            </main>
        )
            
    }
}