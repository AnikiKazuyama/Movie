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

import { dateToNormal, findeReliseDate, minutesToHours, formatingNumber  } from '../util/dateToNormal';

class Movie extends React.Component {
    componentDidMount(){
        const { url, fetch, match } = this.props;
        const id = match.params.id;
        fetch(id, url);
    }

    keyWords(){
        const keywords = this.props.movie.keywords; 

        const wrappKeywords = keywords.keywords.map( keyword => {
            return <span className = 'keyword' key = { keyword.name }>{ keyword.name }</span>
        });

        return wrappKeywords;
    }

    genres(){
        const genres = this.props.movie.genres;

        return genres.map( genre => {
            return <span className = 'keyword' key = { genre.id } >{ genre.name }</span>
        });
    }

    render(){
        const { 
            credits,
            match,
            isFetching,
            location,
            movie,
            error
        } = this.props;

        if(error){
            return <NoMatch error = { error }/>
        }

        if(!movie || isFetching ){
            return <Loader isFetching/> 
        }

        const {
            title,
            original_title,
            overview,
            poster_path,
            backdrop_path,
            budget,
            revenue,
            keywords,
            release_dates,
            genres, 
            runtime
        } = movie;

        const {
            crew, 
            cast
        } = credits;

        const date = dateToNormal(findeReliseDate(release_dates));

        const sidebarTitle = 'Информация о фильме';

        const sidebarConstructor = [
            {
                title: 'Оригинальное название', 
                content:  original_title
            }, 

            {
                title: 'Бюжет', 
                content:  `$${ formatingNumber(budget, ' ', 3) }`
            }, 

            {
                title: 'Сборы', 
                content:  `$${ formatingNumber(revenue, ' ', 3) }`
            }, 

            {
                title: 'Дата выхода', 
                content:  date
            },

            {
                title: 'Продолжительность', 
                content: minutesToHours(runtime)
            },

            {
                title: 'Ключевые слова', 
                content:  this.keyWords()
            },

            {
                title: 'Жанр', 
                content:  this.genres()
            }
            
        ]

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

                        <Sidebar sidebarConstructor = { sidebarConstructor } title = { sidebarTitle }/>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Movie;