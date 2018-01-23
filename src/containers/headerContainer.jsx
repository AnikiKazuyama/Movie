import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';

const HeaderContainer = (props) => <Header { ...props } />

export default connect(null)(HeaderContainer)
