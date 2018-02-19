import React from 'react';

import { Link } from 'react-router-dom';

import { dateToNormal } from '../util/dateToNormal';

export default class Filmograthy extends React.Component{

    constructor(props){
        super(props);
        this.movies = props.movies;
    }

    isKnownReleaseDate(film){
        return ('release_date' in film && film.release_date != '' );
    }

    isUnKnownReleaseDate(film){
        return (!('release_date' in film) || film.release_date == '' );
    }

    compareTitle(prev, next){
        return prev.title < next.title ? -1 : 1;
    }

    compareDates(prev, next){
        let prevDate = new Date(prev.release_date);
        let nextDate = new Date(next.release_date);

        return nextDate.valueOf() - prevDate.valueOf();
    }

    knownReleaseDate = () => {
        return this.movies.filter(this.isKnownReleaseDate);
    }

    unKnownReleaseDate = () => {
        return this.movies.filter(this.isUnKnownReleaseDate);
    }

    allFilms = () => {

        const movies = this.movies;

        const unKnownReleaseDate = this.unKnownReleaseDate(movies);
        const knownReleaseDate = this.knownReleaseDate(movies);

        const unKnownReleaseDateSort = unKnownReleaseDate.sort(this.compareTitle);
        const knownReleaseDateSort = knownReleaseDate.sort(this.compareDates);

        const allFilms = [...unKnownReleaseDateSort, ...knownReleaseDateSort];

        return allFilms.map((film, index) => {
            return <div style = {{display: 'flex'}} key = { index }><div>{ this.isUnKnownReleaseDate(film) ? '-' : dateToNormal(film.release_date) }</div><Link to = { `/${ film.id }` }>{ film.title }</Link></div>
        });
    }

    render(){

        return (
            <div className="all-films">
                { this.allFilms(this.movies) }
            </div>
        );
    }

}