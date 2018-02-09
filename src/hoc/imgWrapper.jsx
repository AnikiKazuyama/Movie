import React from 'react';

import imgNotFound from '../img/404.png';
import loadingSrc from '../img/loading.gif';

export default function ImgWrap(Component){
    return (props) => {
        return <Component loadingSrc = { loadingSrc } unLoadSrc = { imgNotFound } { ...props }/>
    }
}