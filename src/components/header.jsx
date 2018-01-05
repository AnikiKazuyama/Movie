import React from 'react';

const Header = (props) => {
    const { select } = props;

    const click = (event) =>{
        const category = event.currentTarget.innerHTML;
        switch(category){
            case('Популярное'):
                select('popular');
                return;
            case('Скоро выходит'):
                select('upcoming');
                return;
            case('В прокате'):
                select('now_playing');
                return;
            default: select('popular');
        }
    }

    return(
        <div className = 'header'>
            <div className="container">
                <nav className = 'nav'>
                    <div className = 'nav__item' onClick = { (e) => click(e) }>Популярное</div>
                    <div className = 'nav__item' onClick = { (e) => click(e) }>Скоро выходит</div>
                    <div className = 'nav__item' onClick = { (e) => click(e) }>В прокате</div>
                </nav>
            </div>
        </div>
    );

}

export default Header;