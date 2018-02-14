import React from 'react';

import { connect } from 'react-redux';

import Person from '../components/person';

import { fetchPersonIfNeeded } from '../actions/personActions';

import { getUrl, getId, getPerson } from '../selectors/getPersonData';

const peopleContainer = (props) => {
    return <Person { ...props }/>
}

const mapStateToProps = (state) => {
    return{
        url: getUrl(state), 
        id: getId(state), 
        person: getPerson(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPersonIfNeeded: (page, url) =>  dispatch(fetchPersonIfNeeded(page, url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(peopleContainer);