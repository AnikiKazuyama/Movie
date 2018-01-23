import * as Api from '../constants/Api';
import { getCategory } from '../selectors/getMoviesData';

export default function requestForApi( { media = Api.MOVIE, category = Api.POPULAR, language = 'ru-RU', region = 'ru', page = '1' } ){
    return `${Api.API_URL}/${media}/${category}?${Api.API_KEY}&${Api.LANGUAGE}=${language}&${page}&${Api.REGION}=${region}`;
}

export function getUrl(state){
    const location = state.routing.location;
    const pathname = location.pathname;
    const category = getCategory(state);
    const search = location.search;
    const url = `${Api.API_URL}/${Api.MOVIE}/${category}${search ? search + '&' : '?'}${Api.API_KEY}&${Api.LANGUAGE}=ru-RU&${Api.REGION}=ru`;
    return url;
}