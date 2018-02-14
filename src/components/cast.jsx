import React from 'react';

import Loader from './loader';
import NoMatch from './nomatch';

import PersonCard from './personCard';
import BackToMovie from './backToMovie'; 

export default class Cast extends React.Component{

    componentDidMount(){
        const { url, creditsUrl, fetch, match } = this.props;
        const id = match.params.id;
        fetch(id, url, creditsUrl);
    }

    render(){
        const { cast, match, isFetching, movie } = this.props;

        const { title, poster_path } = movie;
        const id = match.params.id;
        
        const allCasts = cast.map(person => {

            const {
                character,
                name,
                profile_path,
                id
            } = person;

            return <PersonCard  character    = { character } 
                                name         = { name } 
                                profile_path = { profile_path }
                                id           = { id }
                                key          = { id } 
                                match        = { match }/>
        })


        if(movie.error){
            return <NoMatch error = { movie.error }/>
        }

        if(isFetching || movie.isFetching){
            return <Loader isFetching/> 
        }

        return  (
            <div>
                <BackToMovie id = { id }  title = { title } poster_path = { poster_path } />
                <div className = "full-cast container">
                    { allCasts }
                </div>
            </div>
        )
    }
}