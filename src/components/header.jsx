import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    componentDidMount(){

    }

    render(){
        return(
            <header className = 'header'>
                <nav>
                    <ul className = 'nav'>
                        <li className="nav__item with-sub-menu">
                            <Link className = 'nav__link' to = '/'>Фильмы</Link>
                            <ul className="nav__sub-menu" >
                                <li className = 'nav__item'><Link className = 'nav__link' to = '/'>Популярное</Link></li>
                                <li className = 'nav__item'><Link className = 'nav__link' to = '/upcoming'>Скоро выходит</Link></li>
                                <li className = 'nav__item'><Link className = 'nav__link' to = '/now_playing'>В прокате</Link></li>
                            </ul>
                        </li>
                        <li className = 'nav__item'><Link className = 'nav__link' to = '/person'>Актеры</Link></li>
                    </ul>
                    
                </nav>
            </header>
        );
    }
}

export default Header;