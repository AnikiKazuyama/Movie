import React from 'react';

export default class Sidebar extends React.Component{

    content(sidebarConstructor){
        return sidebarConstructor.map( (element, id) => {
            return <div className="block" key = { id }>
                        <div className="subtitle">{ element.title }</div>
                        <div className="sidebar__content">{ element.content }</div>
                    </div>
        })
    }

    render(){

        const {
            sidebarConstructor, 
            title
        } = this.props;

        return (
            <div className="sidebar">

                <h3 className='title'>{ title }</h3>

                { this.content(sidebarConstructor) }

            </div>
        );
    }
}