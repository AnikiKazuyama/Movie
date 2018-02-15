import React from 'react';

import Sidebar from './sidebar';

import { imgPath } from '../util/img';
import { dateToNormal } from '../util/dateToNormal';
import { wrapTextInTagPBySymbol } from '../util/text';

import { IMGSIZE1000 } from '../constants/movies'; 
import { GENDERS, MALE } from '../constants/gender';
import { INFORMATION_ABOUT_PERSONE, BIRTHDAY, BIRTH_PALCE, OFFICIAL_SITE, BIOGRAPHY } from '../constants/extra';


export default class Person extends React.Component{

    componentDidMount(){
        const { fetchPersonIfNeeded, id, url } = this.props;

        fetchPersonIfNeeded(id, url);
    }

    componentWillReceiveProps(nextProps){
        const { location, url, id, fetchPersonIfNeeded } = this.props;

        if(location != nextProps.location){
            fetchPersonIfNeeded(nextProps.id, nextProps.url); 
        }
    }

    mostPopularMovies(movies, howMany){

        const sortByPopularity = movies.sort((a, b) =>
            b.vote_count - a.vote_count 
        )

        let best = [];

        for(let i = 0; i < howMany; i++){
            best.push(sortByPopularity[i]);
        }
          
        return best;
    }

    knownFor(movies){
        const popular = this.mostPopularMovies(movies, 8);

        return popular.map( (movie, index) => {
            return(
                <div className = "card" key = { index }>
                    <img style = {{width: '200px', height: 'auto'}} src={ imgPath(IMGSIZE1000, movie.poster_path) } alt=""/>
                    <div>{movie.title}</div>
                </div>
            )
        });
    }

    

    render(){
        const { person } = this.props;
        
        if(person && !person.isFetching){

            const {
                name,
                biography, 
                gender, 
                place_of_birth,
                birthday, 
                homepage
            } = person;

            const formatingBiography = wrapTextInTagPBySymbol(biography, '\n\n');

            const castMovies = person.movie_credits.cast;

            const sidebarConstructor = [
                {
                    title: MALE, 
                    content: GENDERS[gender]
                },

                {
                    title: BIRTHDAY, 
                    content: dateToNormal(birthday)
                },

                {
                    title: BIRTH_PALCE, 
                    content: place_of_birth || '-'
                },
                
                {
                    title: OFFICIAL_SITE, 
                    content: homepage ? <a href = { homepage }>{ homepage }</a> : '-'
                }
            ] ;

            return <div className="person">
                        <aside>
                            <img src={ imgPath(IMGSIZE1000, person.profile_path) } alt=""/>
                            <Sidebar title = { INFORMATION_ABOUT_PERSONE }
                                     sidebarConstructor = { sidebarConstructor }/>

                        </aside>
                        <div>
                            <h2 className="name">{ name }</h2>
                            <div className="biograthi">
                                <h3>{ BIOGRAPHY }</h3>
                                <div>{ formatingBiography }</div>
                            </div>

                            <div className="known-for">
                                <h2 style = {{ display: 'block' }}>Известен по</h2>
                                <div className="filsms" style = {{display: 'flex', flexWrap: 'wrap'}}>
                                    { this.knownFor(castMovies) }
                                </div>
                            </div>

                            <div className="all-films">

                            </div>
                        </div>
                    </div>
        }
        return <div>Нутакое</div>;
    }
}