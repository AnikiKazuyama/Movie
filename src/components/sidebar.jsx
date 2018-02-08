import React from 'react';

export default class Sidebar extends React.Component{

    keyWordss(){
        const { keywords } = this.props;  
        const wrappKeywords = keywords.keywords.map(keyword => {
            return <span className = 'keyword' key = {keyword.name}>{ keyword.name }</span>
        });

        return wrappKeywords;
    }

    render(){

        const {
            original_title, 
            budget, 
            releaseDate
        } = this.props;

        return (
            <aside className="sidebar">
                <p>
                    <strong>Оригинальное название</strong><span>{ original_title }</span>
                </p>

                <p>
                    <strong>Бюджет</strong><span>{ `$${budget}` }</span>
                </p>

                <p>
                    <strong>Дата выхода</strong><time>{ releaseDate }</time>
                </p>

                <p>
                    <strong>Ключевые слова</strong>
                    { this.keyWordss() }
                </p>

            </aside>
        );
    }
}