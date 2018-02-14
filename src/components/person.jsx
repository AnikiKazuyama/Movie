import React from 'react';

import { imgPath } from '../util/img';
import { IMGSIZE1000 } from '../constants/movies'; 

export default class Person extends React.Component{

    componentDidMount(){
        const { fetchPersonIfNeeded, id, url } = this.props;

        fetchPersonIfNeeded(id, url);
    }

    componentWillReceiveProps(nextProps){
        const { location, url, id, fetchPersonIfNeeded } = this.props;

        if(location != nextProps.location){
            fetchPersonIfNeeded(nextProps.id, nextProps.url); 
        }
    }

    render(){
        const { person } = this.props;

        if(person){

            const {
                biography
            } = person;

            return <div className="person">
                        <aside>
                            <img src={ imgPath(IMGSIZE1000, person.profile_path) } alt=""/>
                        </aside>
                        <div>
                            <h2 className="name"></h2>
                            <div className="biograthi">
                                <h3>Биография</h3>
                                <p>{ biography }</p>
                            </div>
                        </div>

                    </div>
        }
        return <div>Нутакое</div>;
    }
}