export const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'api_key=5d86851f8dccd20c99b410ddf0237d0c';
export const LANGUAGE = 'language';
export const MOVIE = 'movie';
export const PERSON = 'person';
export const POPULAR = 'popular';
export const REGION = 'region';
export const APPEND_TO_RESPONSE = "append_to_response";

export const personUrl = (id) => `${ API_URL }/${ PERSON }/${ id }?append_to_response=movie_credits&${ API_KEY }&${ LANGUAGE }=ru-RU&${ REGION }=ru`;
export const peopleUrl = (page) => `${ API_URL }/${ PERSON }/${ POPULAR }?page=${ page }&${ API_KEY }&${ LANGUAGE }=ru-RU&${ REGION }=ru`;