import { IMGURL } from '../constants/movies'

export function imgPath(size, path){
    return ( IMGURL + size + path );
}