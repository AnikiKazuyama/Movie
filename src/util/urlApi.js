import { 
            API_URL, 
            API_KEY,
            APPEND_TO_RESPONSE, 
            LANGUAGE, 
            REGION, 
            POPULAR, 
            MOVIE  
        } from '../constants/Api';
        
import { getCategory } from '../selectors/getMoviesData';

export default function requestForApi( { media = Api.MOVIE, category = Api.POPULAR, language = 'ru-RU', region = 'ru', page = '1' } ){
    return `${Api.API_URL}/${media}/${category}?${Api.API_KEY}&${Api.LANGUAGE}=${language}&${page}&${Api.REGION}=${region}`;
}

export function getUrl(state, current = false){
    const location = state.routing.location;
    const pathname = location.pathname;
    const category = getCategory(state);
    const search = location.search ? location.search + '&' : '?'
    const type = MOVIE;
    current = current ? '/' + current : '';

    switch(type){
        case MOVIE: 
            return(`${ API_URL }/${ type }/${ category }${ current }${ search }&${ APPEND_TO_RESPONSE }=credits,release_dates,keywords&${API_KEY}&${LANGUAGE}=ru-RU&${REGION}=ru`);
    
    }

}