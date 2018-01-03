import { POPULAR } from '../constants/categories';
import { SELECTED_BY } from '../constants/Actions';

export default function selectedBy(state =  POPULAR , action){
    switch (action.type){
        case SELECTED_BY:
            return (action.category);
        default: return state;
    }
}