import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HeaderContainer from '../containers/headerContainer';
import { category as genres, category } from '../constants/categories';

import MoviesContainer from '../containers/MoviesContainer';
import Main from './main';

const Fragment = React.Fragment;

export default class Root extends React.Component{
    componentWillReceiveProps(nextProps){
        const { location } = this.props;
        const nextLocation  = nextProps.location;
        if(location != nextLocation){
            window.scrollTo(0,0);
        }
    }

    render(){
        return(
            <Fragment>
                <HeaderContainer/>
                <Main/>
            </Fragment>
        );
    }
}