import React from 'react';

export function wrapTextInTagPBySymbol(text, symbol){
    const textArr = text.split(symbol);

    return textArr.map( (pieceOfText, index) => <p key = { index }>{ pieceOfText }</p> );
}