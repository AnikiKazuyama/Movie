import React from 'react';
import ImgWrap from '../hoc/imgWrapper';

class Img extends React.Component{

    constructor(){
        super();
        this.state = {
            loaded: false, 
            error: false
        };
    }

    componentDidMount(){
        const { 
            src,
            alt
        } = this.props;

        this.img         = new Image;
        this.img.onload  = this.handleLoad;
        this.img.onerror = this.handleError;
        this.img.src     = src;
    }

    handleError = () => {
        this.setState({ error: true });
    }

    handleLoad = (e) => {
        this.setState({ loaded: true });
    }

    render(){
        const { 
            src,
            unLoadSrc,
            loadingSrc,
            alt
        } = this.props;

        const {
            loaded, 
            error
        } = this.state;

        if(error){
            return <img src = { unLoadSrc } alt = 'NotFound'/>
        } 
        else 
            if(!loaded)
                return <img src = { loadingSrc } alt = "Loading" />
        return <img src = { src } alt = { alt }/>

    }
}

export default ImgWrap(Img);