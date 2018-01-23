import React from 'react';

import Header from './header';
import MoviesBody from './moviesBody';
import Paginator from './paginator';
import { Switch } from 'react-router-dom';

const Fragment = React.Fragment;

export default class Movies extends React.Component {
    constructor(props){
        super(props);
        this.renderTimes = 0;
    }

    componentWillMount(){
        const { fetchCategory, category, url } = this.props;
        fetchCategory(category, url);
    }

    componentWillReceiveProps(nextProps){
        const { fetchCategory, location, match } = this.props;
    
        if(location != nextProps.location){
            fetchCategory(nextProps.category, nextProps.url)
        }
    } 

    render(){
        const { 
            movies,
            page,
            total_pages, 
            isFetching, 
            location, 
            match,
            category
        } = this.props;
        
        const url = match.url;

        return(
            <div className="movies">
                <div className="container">
                    <MoviesBody movies = { movies } isFetching = { isFetching } match = { match }/> 
                    <Paginator currentPage = { page } total_pages = { total_pages } category = { category } url = { url } />
                </div>                         
            </div>
        );
    }

}