import * as Api from '../constants/Api';

export default function requestForApi( { media = Api.MOVIE, category, language = 'ru-RU', region = 'ru', page = '1' } ){
    console.log(media)
    return `${Api.API_URL}/${media}/${category}?${Api.API_KEY}&${Api.LANGUAGE}=${language}&page=${page}&${Api.REGION}=${region}`;
}