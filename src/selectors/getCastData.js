    const getId = (state) => {
    const pathname = state.routing.location.pathname;
    const catalogs = pathname.split('/');
    const id = catalogs[1];
    return id;
};

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

export const getIsFetching = (state) => {
    const id = getId(state); 
    const creditsExist = id in state.credits;
    return creditsExist ? state.credits[id].isFetching : false;
}