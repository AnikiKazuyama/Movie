import * as Api from '../constants/Api';

export default function requestForApi( { media = Api.MOVIE, category = Api.POPULAR, language = 'ru-RU', region = 'ru', page = '1' } ){
    // console.log(`${Api.API_URL}/${media}/${category}?${Api.API_KEY}&${Api.LANGUAGE}=${language}&${page}&${Api.REGION}=${region}`)
    return `${Api.API_URL}/${media}/${category}?${Api.API_KEY}&${Api.LANGUAGE}=${language}&${page}&${Api.REGION}=${region}`;
}

export function getUrl(state){
    const location = state.routing.location;
    const pathname = location.pathname;
    const search = location.search;
    const url = `${Api.API_URL}/${Api.MOVIE}${pathname}${search ? search + '&' : '?'}${Api.API_KEY}&${Api.LANGUAGE}=ru-RU&${Api.REGION}=ru`;
    // console.log(url);
    return url;
}