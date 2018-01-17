import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { select } = props;
    return(
        <header className = 'header'>
            <div className="container">
                <nav className = 'nav'>
                    <div className = 'nav__item'><Link className = 'nav__link' to = '/'>Популярное</Link></div>
                    <div className = 'nav__item'><Link className = 'nav__link' to = '/upcoming'>Скоро выходит</Link></div>
                    <div className = 'nav__item'><Link className = 'nav__link' to = '/now_playing'>В прокате</Link></div>
                </nav>
            </div>
        </header>
    );

}

export default Header;