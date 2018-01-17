import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HeaderContainer from '../containers/headerContainer';
import { category as genres, category } from '../constants/categories';

import MoviesContainer from '../containers/MoviesContainer';
import Main from './main';

const Fragment = React.Fragment;

const Root = () => 
    <Fragment>
        <HeaderContainer/>
        <Main/>
    </Fragment>


export default Root;