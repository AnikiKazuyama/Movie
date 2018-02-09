import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HeaderContainer from '../containers/headerContainer';
import { category as genres, category } from '../constants/categories';

import MoviesContainer from '../containers/MoviesContainer';
import Main from './main';

const Fragment = React.Fragment;

export default class Root extends React.Component{


    render(){
        return(
            <Fragment>
                <HeaderContainer/>
                <Main/>
            </Fragment>
        );
    }
}