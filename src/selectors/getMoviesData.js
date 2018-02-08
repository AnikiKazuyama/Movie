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
    const page = getPage(state);
    const existCategory = category in state.movies;
    const existPage = existCategory ? page in state.movies[category]: false;
    return existPage ? state.movies[category].isFetching : false ;
}

export const getMovies = (state) => {
    const category = getCategory(state);
    const page = getPage(state);
    const existCategory = category in state.movies;
    const existPage = existCategory ? page in state.movies[category]: false;
    return existPage ? state.movies[category][page].results : [];
}

export const getTotal_pages = (state) =>{
    const category = getCategory(state);
    const page = getPage(state);
    const existCategory = category in state.movies;
    const existPage = existCategory ? page in state.movies[category]: false;
    return existPage ? state.movies[category][page].total_pages : false;
}
