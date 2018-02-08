import React from 'react';

import QuickView from './quickView';
import NoMatch from './nomatch';
import Loader from './loader';
import PeopleMini from './peopleMini';
import Cast from './cast';
import Sidebar from './sidebar';

import { imgPath } from '../util/img';

import { IMGSIZE1000 } from '../constants/movies'

import { Route } from 'react-router-dom';

class Movie extends React.Component {
    componentDidMount(){
        const { url, fetch, match } = this.props;
        const id = match.params.id;
        fetch(id, url);
    }

    render(){
        const { 
            match,
            isFetching,
            cast,
            crew,
            location,
            releaseDate,  
            poster_path, 
            title,
            original_title,
            overview, 
            backdrop_path, 
            budget,
            keywords,
            error
        } = this.props;

        if(error){
            return <NoMatch error = { error }/>
        }

        if(!title || isFetching ){
            return <Loader isFetching/> 
        }

        return (
            <div className = 'movie'>
                <QuickView poster_path   = { poster_path } 
                           title         = { title }
                           overview      = { overview } 
                           backdrop_path = { backdrop_path } />

                <div className="bgMain">

                    <div className="movie__inner container">

                        <div className = 'movie__main'>

                            <PeopleMini cast = { cast } location = { location } match = { match }/> 

                        </div>
                        
                        <Sidebar original_title  = { original_title }
                                 budget          = { budget }
                                 releaseDate     = { releaseDate }
                                 keywords        = { keywords }/>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Movie;