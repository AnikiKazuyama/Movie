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
        const { fetchIfNeeded, category, url } = this.props;
        fetchIfNeeded(category, url);
    }

    componentWillReceiveProps(nextProps){
        const { fetchIfNeeded, fetchNextIfNeeded, category, url, location } = this.props;
        if(category != nextProps.category){
            fetchIfNeeded(nextProps.category, nextProps.url);
        }
        // else if(location != nextProps.location){
        //         fetchNextIfNeeded(nextProps.category, nextProps.url);
        //     }
        } 

  
    render(){
        console.log('рундер');
        const { 
            movies,
            page,
            total_pages, 
            isFetching, 
            fetch, 
            location, 
            match,
            fetchIfNeeded,
            url,
            category
        } = this.props;

        return(
            <div className="movies">
                <div className="container">
                    <MoviesBody movies = { movies } isFetching = { isFetching }/> 
                    <Paginator page = { page } total_pages = { total_pages } category = { category } location = { location } match = { match } />
                </div>                         
            </div>
        );
    }

}