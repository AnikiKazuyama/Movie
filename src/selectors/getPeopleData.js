import queryStrToObj from '../util/urlUtils';
import { peopleUrl } from '../constants/Api';

export function getPage(state){
    const location = state.routing.location;
    const search = queryStrToObj(location.search);
    const page = search.page ? search.page : 1;
    return Number(page);
}

const stuff = (state) => {
    const page = getPage(state);
    const people = state.people;
    const pageExist = isPageExist(people, page);
    return { 
        page, 
        pageExist,
        people
    }
}

const isPageExist = (people, page) => {
    return page in people;
}

export function getTotalPages(state){
    const { people, page, pageExist } = stuff(state);
    const totalPages = pageExist ? people[page].total_pages : 0;
    return totalPages;
}

export function getPeople(state){
    const { people, page, pageExist } = stuff(state);
    const peopleResult = pageExist ? people[page].results : [];
    return peopleResult;
}

export function getIsfetching(state){
    const { people, page, pageExist } = stuff(state);
    const isFetching = pageExist ? people[page].isFetching : false;
    return isFetching;
}

export function getUrl(state){
    const page = getPage(state);
    const url = peopleUrl(page)
    return url;
}