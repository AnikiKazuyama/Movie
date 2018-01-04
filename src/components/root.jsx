import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from '../containers/headerContainer';
import { category as genres, category } from '../constants/categories';
import MoviesContainer from '../containers/MoviesContainer';

const Fragment = React.Fragment;

const Root = () => 
    <Fragment>
        <HeaderContainer/>
        <MoviesContainer/>
    </Fragment>


export default Root;