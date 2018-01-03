import React from 'react';
import Header from './header';

const Fragment = React.Fragment;

export default class Movies extends React.Component {
    constructor(props){
        super(props);
        this.renderTimes = 0;
    }
    componentWillMount(){
        this.props.fetch(this.props.selectedBy);
        this.some = this.props.movies;
    }
    
    renderPosters(movies){
        const imgUrl = 'https://image.tmdb.org/t/p';
        return movies.map(movie => <div style = {{ width: 20+'%' }} key = {movie.id}><img style = {{display: 'blcok', width: 100+'%'}}  src={imgUrl+'/w1000'+movie.poster_path} alt=""/></div> )
    }

    render(){
        const { movies, isFetching, fetch } = this.props;
        this.renderTimes++;
        const genres = {};
        if(isFetching){
            return <div style = {{fontSize: 74+"px", color: 'red', verticalAlign: 'middle', textAlign: 'center'}}>Загрузка</div>
        }
        
        return(
            <Fragment>
                <Header handleClick = {fetch}/>
                <div style = {
                    { 
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 100+'%', width: 100+'%'
                    }
                }>
                    {this.renderPosters(movies)}                 
                </div>
            </Fragment>
        );
    }

}