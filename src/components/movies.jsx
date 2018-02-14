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

    componentDidMount(){
        const { fetchCategory, category, page, url } = this.props;

        fetchCategory(category, page, url);
    }

    componentWillReceiveProps(nextProps){
        const { fetchCategory, location } = this.props;

        if(location != nextProps.location){
            fetchCategory(nextProps.category, nextProps.page, nextProps.url)
        }
    } 

    render(){
        const { 
            movies,
            page,
            total_pages, 
            isFetching, 
            match,
            category
        } = this.props;
        
        const url = match.url;
        return(
            <div className="movies">
                <div className="container">
                    <MoviesBody movies = { movies } isFetching = { isFetching } match = { match }/> 
                </div>                         
                <Paginator currentPage = { page } total_pages = { total_pages } category = { category } url = { url } />
            </div>
        );
    }

}