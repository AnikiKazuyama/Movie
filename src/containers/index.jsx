import React from 'react';

import { connect } from 'react-redux';

import Root from '../components/root'

const RootContainer = (props) => <Root { ...props }/>

const mapStateToProps  = (state) =>{
    return{
        location: state.routing.location
    }

}



export default connect(mapStateToProps)(RootContainer);