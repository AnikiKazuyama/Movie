import React from 'react';

export default class Img extends React.Component{

    componentDidMount(){
        this.image.onload = () => {console.log('загружено')};
        this.image.onerror = () => {this.handleError(this.image)};
        
    }

    handleError = (image) => {
        image.src = 'https://i5.walmartimages.com/asr/f752abb3-1b49-4f99-b68a-7c4d77b45b40_1.39d6c524f6033c7c58bd073db1b99786.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF';
    }

    render(){
        const { 
            src,
            alt
        } = this.props;

        return <img ref = { (img) => { this.image = img } } src = { src } alt = { alt } onError = { this.handleError(this)} />
    }
}
