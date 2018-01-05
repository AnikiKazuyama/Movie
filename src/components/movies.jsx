import React from 'react';

import Header from './header';
import MoviesBody from './moviesBody';

const Fragment = React.Fragment;

export default class Movies extends React.Component {
    constructor(props){
        super(props);
        this.renderTimes = 0;
    }

    componentWillMount(){
        const { fetch, selectedBy, movies } = this.props;
        if(movies.length === 0){
            fetch(selectedBy);
        }
    }

    componentWillReceiveProps(nextProps){
        const { fetch, selectedBy, movies } = this.props;
        if(selectedBy != nextProps.selectedBy && nextProps.movies.length === 0){
            fetch(nextProps.selectedBy)
        }
    }
    
    componentDidMount(){

        const { movies, fetch, selectedBy } = this.props;
    }

    renderPosters(movies){
        const imgUrl = 'https://image.tmdb.org/t/p';
        return movies.map(movie => <div key = {movie.id}><img style = {{display: 'blcok', width: 100+'%'}}  src={imgUrl+'/w1000'+movie.poster_path} alt=""/></div> )
    }

    render(){
        const { movies, isFetching, fetch } = this.props;

        return(
            <div className="movies">
                <div className="container">
                    <MoviesBody movies = { movies } isFetching = { isFetching }/> 
                </div>                         
            </div>     
        );
    }

}