import React from 'react';
import Header from './header';

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
        console.log(movies.length)
        if(selectedBy != nextProps.selectedBy && nextProps.movies.length === 0){
            fetch(nextProps.selectedBy)
        }
    }
    
    componentDidMount(){

        const { movies, fetch, selectedBy } = this.props;
    }

    renderPosters(movies){
        const imgUrl = 'https://image.tmdb.org/t/p';
        return movies.map(movie => <div style = {{ width: 20+'%' }} key = {movie.id}><img style = {{display: 'blcok', width: 100+'%'}}  src={imgUrl+'/w1000'+movie.poster_path} alt=""/></div> )
    }

    render(){
        const { movies, isFetching, fetch } = this.props;

        const style = { 
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100+'%', width: 100+'%'
        };

        const styleForLoad = {
            fontSize: 74+"px",
            color: 'red',
            verticalAlign: 'middle',
            textAlign: 'center'
        }

        if(isFetching){
            return <div style = { styleForLoad }>Загрузка</div>
        }
        
        return(
            <Fragment>
                {this.renderPosters(movies)}                
            </Fragment>
        );
    }

}