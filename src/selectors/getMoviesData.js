import queryStrToObj from '../util/urlUtils';

export const getCategory = (state) => {
    const pathname = state.routing.location.pathname;
    return (pathname == '/') ? 'popular' : pathname.split('/')[1];
}
    


export const getPage = (state) => {
    const page = Number(queryStrToObj(state.routing.location.search).page);
    return page ? page : 1; 
}



export const getIsFetching = (state) => {
    const category = getCategory(state);
    return category in state.movies ? state.movies[category].isFetching : false ;
}

export const getMovies = (state) => {
    const category = getCategory(state);
    return category in state.movies ? state.movies[category].results : [];
}

export const getTotal_pages = (state) =>{
    const category = getCategory(state);
    return category in state.movies ? state.movies[category].total_pages : null;
}
