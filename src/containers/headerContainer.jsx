import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import { selectBy } from '../actions/actions';

const HeaderContainer = (props) => <Header { ...props } />

const mapDispatchToProps = (dispatch) =>{
        return {
            select: (category) => { dispatch(selectBy(category)) }
        }
    }

export default connect(null, mapDispatchToProps)(HeaderContainer)
