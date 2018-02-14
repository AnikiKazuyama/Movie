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
