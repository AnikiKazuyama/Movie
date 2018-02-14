import collection  from 'lodash/collection';

export function dateToNormal(data){
    const date = new Date(data);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateToLocal = date.toLocaleDateString("ru-RU", options);

    return(dateToLocal);
}

export function findeReliseDate(obj){
    const release_dates   = obj.results;
    const releaseInRussia = collection.find(release_dates, (date) => date.iso_3166_1 == 'RU');
    const releaseDate     = releaseInRussia ? releaseInRussia.release_dates[0].release_date  : 'нинаю' ;
    return releaseDate;
}

export function minutesToHours(minutes){
    const hours = Math.floor(minutes / 60);
    const minute = minutes - 60 * hours;
    return `${hours}ч ${minute}м`;
}