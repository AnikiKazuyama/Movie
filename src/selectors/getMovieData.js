import  collection  from 'lodash/collection';

import dateToNormal from '../util/dateToNormal';

const getId = (state) => {
    const pathname = state.routing.location.pathname;
    const catalogs = pathname.split('/');
    const id = catalogs[1];
    return id;
};

export const getMovie = (state) => {
    const id = getId(state); 
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id] : false;
};

export const getPosterPath = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id].poster_path : false;
}

export const getTitle = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id].title : false;
}

export const getOriginalTitle = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id].original_title : false;
}

export const getOverview = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id].overview : false;
}

export const getBackdropPath = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id].backdrop_path : false;
}

export const getBudget = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id].budget : false;
}

export const getKeywords = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id].keywords : [];
}


export const getIsFetching = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id].isFetching : false;
}

export const getError = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    const errorExist = movieExist ? 'error' in state.movie[id] : false;
    return errorExist ? state.movie[id].error : false;
}

export const getCredits = (state) => {
    const id = getId(state);
    const creditsExist = id in state.credits;
    return creditsExist ? state.credits[id] : [];
}

export const getCast = (state) => {
    const id = getId(state);
    const creditsExist = id in state.credits;
    return creditsExist ? state.credits[id].cast : [];
}

export const getCrew = (state) => {
    const id = getId(state);
    const creditsExist = id in state.credits;
    return creditsExist ? state.credits[id].crew : [];
}

export const getReleaseDate = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    const releaseDatesExist = movieExist ? 'release_dates' in state.movie[id] : false;

    if(releaseDatesExist){
        const release_dates   = state.movie[id].release_dates.results;
        const releaseInRussia = collection.find(release_dates, (date) => date.iso_3166_1 == 'RU');
        const releaseDate     = releaseInRussia ? releaseInRussia.release_dates[0].release_date  : 'нинаю' ;
        return dateToNormal(releaseDate);
    }

    return false;
}

const getMovieData = (state) => {
    return{
        title: getTitle(state),
        original_title: getTitle(state),
        overview: getOverview(state),
        poster_path: getPosterPath(state),
        backdrop_path: getBackdropPath(state),
        budget: getBudget(state),
        keywords: getKeywords(state),
        isFetching: getIsFetching(state),
        cast: getCast(state), 
        crew: getCrew(state),
        releaseDate: getReleaseDate(state), 
        error: getError(state)
    }
}

export default getMovieData;