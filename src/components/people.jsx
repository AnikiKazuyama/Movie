import React from 'react';

import PeopleBody from './peopleBody';

import PersonCard from './personCard';
import Paginator from './paginator';


export default class People extends React.Component {
    componentDidMount(){
        const { page, url, fetchPeopleIfNeeded } = this.props;

        fetchPeopleIfNeeded(page, url);
    }

    componentWillReceiveProps(nextProps){
        const { location, url, page, fetchPeopleIfNeeded } = this.props;

        if(location != nextProps.location){
            fetchPeopleIfNeeded(nextProps.page, nextProps.url); 
        }
    }


    render(){
        const Fragment = React.Fragment;

        const { total_pages, page, people, match, isFetching } = this.props;

        const url = match.url;
        
        return(
            <div className="movies">
                <div className="container">
                    <PeopleBody people = { people } isFetching = { isFetching }/>
                </div>
                <Paginator total_pages = { total_pages } url = { url } currentPage = { page }/>
            </div>
        );
    }
       
}