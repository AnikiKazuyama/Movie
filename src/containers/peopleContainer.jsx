import React from 'react';
import { connect } from 'react-redux';

import People from '../components/people';

import { fetchPeopleIfNeeded } from '../actions/peopleActions';

import { getUrl, getPage, getTotalPages, getPeople, getIsfetching } from '../selectors/getPeopleData';

const peopleContainer = (props) => {
    return <People { ...props }/>
}

const mapStateToProps = (state) => {
    return{
        url: getUrl(state), 
        page: getPage(state), 
        total_pages: getTotalPages(state), 
        people: getPeople(state), 
        isFetching: getIsfetching(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeopleIfNeeded: (page, url) =>  dispatch(fetchPeopleIfNeeded(page, url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(peopleContainer);