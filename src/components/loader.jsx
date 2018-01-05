import React from 'react';

const Loader = (props) => {
    const isFetching = props.isFetching;  
    return isFetching ? <div className = 'loader'/> : null ;
}

export default Loader;