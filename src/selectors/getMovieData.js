const getId = (state) => {
    const pathname = state.routing.location.pathname;
    const catalogs = pathname.split('/');
    const id = catalogs[catalogs.length-1];
    return id;
};

export const getMovie = (state) => {
    const id = getId(state); 
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id] : {};
};

export const getIsFetching = (state) => {
    const id = getId(state);
    const movieExist = id in state.movie;
    return movieExist ? state.movie[id].isFetching : false;
}