import React from 'react';

import { Link } from 'react-router-dom';

export default class Paginator extends React.Component{

    nextPage(){
        const { url, total_pages, currentPage } = this.props;

        return (
            currentPage < total_pages ?
                  <Link to = { `${url}?page=${currentPage + 1}`} className = { 'paginator__link paginator__link-next' } key = { total_pages + 1 }><span className = "arrow right"/></Link> :
                  <div className = { 'paginator__link paginator__link-next' } key = { total_pages + 1 }><span className = "arrow right"/></div>
        )
    }

    prevPage(){
        const { url, currentPage } = this.props;

        return (
            currentPage > 1 ?
                  <Link to = { `${url}?page=${currentPage - 1}`} className = { 'paginator__link paginator__link-prev' } key = { 0 }><span className = "arrow left"/></Link> :
                  <div className = { 'paginator__link paginator__link-prev' } key = { 0 }><span className = "arrow left"/></div>
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
        
        if(total_pages){
            
            const { prevPage, nextPage } = this.nextPrevPage();

            paginator.push(prevPage);

            let lastLink = null;

            (total_pages >= 5 && (total_pages >= currentPage + 2)) ? lastLink = currentPage + 2 : lastLink = total_pages;
            
            let i = 1;

            if(currentPage >= 3){
                i = currentPage - 2;
            }

            for(i; i <= lastLink; i++){
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