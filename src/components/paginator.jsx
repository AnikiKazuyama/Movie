import React from 'react';

import { Link } from 'react-router-dom';

export default class Paginator extends React.Component{

    nextPage(){
        const { url, total_pages, currentPage } = this.props;
        return (
            currentPage < total_pages ?
                  <Link to = { `${url}?page=${currentPage + 1}`} className = { 'paginator__link' } key = { total_pages + 1 }>Next</Link> :
                  <div className = { 'paginator__link' } key = { total_pages + 1 }>Next</div>
        )
    }

    prevPage(){
        const { url, currentPage } = this.props;

        return (
            currentPage > 1 ?
                  <Link to = { `${url}?page=${currentPage - 1}`} className = { 'paginator__link' } key = { 0 }>Prev</Link> :
                  <div className = { 'paginator__link' } key = { 0 }>Prev</div>
        )
    }

    dotPage(){
        return <div className = { 'paginator__link-dots' }><span className = 'dots'>...</span></div>
    }

    nextPrevPage(){
        return {
            prevPage: this.prevPage(),
            nextPage: this.nextPage()
        }

    }

    render(){
        const { currentPage, total_pages, url } = this.props;

        let paginator = [];

        if(currentPage){
            const { prevPage, nextPage } = this.nextPrevPage();

            paginator.push(prevPage);

            let lastLink = null;

            total_pages >= 5 ? lastLink = currentPage + 4 : lastLink = total_pages;

            for(let i = currentPage; i <= lastLink; i++){
                const directTo = {
                    pathname: `${url}`,
                    search: `page=${i}`
                }
                
                paginator.push( 
                    <Link className = { currentPage == i ? 'paginator__link_active' : 'paginator__link' }
                          to        = { directTo } 
                          key       = { i }>
                            { i }
                    </Link>)
            }

            paginator.push(nextPage);
            
        }
        
        return(
            <nav className = 'paginator'>
                { paginator }               
            </nav>
        );
    }
}