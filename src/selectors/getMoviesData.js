export const isFetching = (state) => {
    const selectedBy = state.selectedBy;
    return selectedBy in state.movies ? state.movies[selectedBy].isFetching : false ;
};

export const movies = (state) => {
    const selectedBy = state.selectedBy;
    return state.selectedBy in state.movies ? state.movies[selectedBy].results : [];
}