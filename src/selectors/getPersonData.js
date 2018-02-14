import { personUrl } from '../constants/Api';

export const getId = (state) => {
    const pathname = state.routing.location.pathname;
    const catalogs = pathname.split('/');
    const id = catalogs[2];
    return id;
};

export function getUrl(state){
    const id = getId(state);
    const url = personUrl(id)
    return url;
}

export function getPerson(state){
    const id = getId(state);
    const personExist = id in state.person;
    const person = personExist ? state.person[id] : null;
    return person;
}