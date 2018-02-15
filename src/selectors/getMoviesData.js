import queryStrToObj from '../util/urlUtils';

export const getCategory = (state) => {
    const pathname = state.routing.location.pathname;
    return (pathname == '/') ? 'popular' : pathname.split('/')[1];
}
    
export const getPage = (state) => {
    const page = Number(queryStrToObj(state.routing.location.search).page);
    return page ? page : 1; 
}

const isPageExist = (movies, category, page) => {
    const existCategory = category in movies;
    return existCategory ? page in movies[category]: false;
}

const stuff = (state) => {
    const category = getCategory(state);
    const page = getPage(state);
    const movies = state.movies;
    const existPage = isPageExist(movies, category, page);
    return {
        category, 
        page, 
        existPage
    }
}

export const getIsFetching = (state) => {
    const { page, category, existPage } = stuff(state);
    
    return existPage ? state.movies[category][page].isFetching : false ;
}

export const getMovies = (state) => {
    const { page, category, existPage } = stuff(state);

    return existPage ? state.movies[category][page].results : [];
}

export const getTotal_pages = (state) =>{
    const { page, category, existPage } = stuff(state);

    return existPage ? state.movies[category][page].total_pages : false;
}
