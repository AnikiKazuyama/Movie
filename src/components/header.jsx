import React from 'react';

const Fragment = React.Fragment;

const Header = (props) => {
    const { select } = props;
    return(
        <Fragment>
            <div onClick = {(e) => {select(e.currentTarget.innerHTML)}}>popular</div>
            <div onClick = {(e) => {select(e.currentTarget.innerHTML)}}>upcoming</div>
            <div onClick = {(e) => {select(e.currentTarget.innerHTML)}}>now_playing</div>
        </Fragment>
    );

}

export default Header;