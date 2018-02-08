import React from 'react';

const NoMatch = (props) =>{
    return (
        <div className = 'not-found'>
            <div className = 'not-found__status'>{props.error.errorStatus}</div>
        </div>
    );
} 


export default NoMatch;