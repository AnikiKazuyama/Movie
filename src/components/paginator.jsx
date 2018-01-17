import React from 'react';

import { Link } from 'react-router-dom';

export default class Paginator extends React.Component{
    render(){
        const { page, total_pages, category, location, match } = this.props;
        let paginator = [];

        if(page){

            const url = match.url;
            let lastLink = null;
            total_pages >= 5 ? lastLink = +page + 5 : lastLink = total_pages;
            for(let i = 1; i <= lastLink; i++){
                const directTo = {
                    pathname: `${url}`, 
                    search: `page=${i}`
                }
                
                paginator.push( 
                    <Link className = { page === i ? 'paginator__link_active' : 'paginator__link' }
                          to        = { directTo } 
                          key       = { i }>
                            { i }
                    </Link>)
            }
            
        }
        
        return(
            <nav className = 'paginator'>
                { paginator }               
            </nav>
        );
    }
}