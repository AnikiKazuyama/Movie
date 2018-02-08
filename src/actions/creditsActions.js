import { FETCH_CREDITS, FETCH_CREDITS_SUCCESS } from '../constants/creditsActions';

export function fetchCredits(id, url){
    return {
        type: FETCH_CREDITS,
        id, 
        url
    }
}

export function fetchCreditsSuccess(id, data){
    return {
        type: FETCH_CREDITS_SUCCESS,
        id,
        data 
    }
}