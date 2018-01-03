import React from 'react';

const Fragment = React.Fragment;

const Header = (props) => {
    const { handleClick } = props;
    return(
        <Fragment>
            <div onClick = {(e) => {handleClick(e.currentTarget.innerHTML)}}>popular</div>
            <div onClick = {(e) => {handleClick(e.currentTarget.innerHTML)}}>upcoming</div>
            <div onClick = {(e) => {handleClick(e.currentTarget.innerHTML)}}>now_playing</div>
        </Fragment>
    );

}

export default Header;