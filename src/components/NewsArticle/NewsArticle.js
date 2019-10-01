import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    return(
        <article className='news-article'>
            <img src={props.img} />
            <h2>{props.headline}</h2>
            <p>{props.description}</p>
        </article>
    )
}

export default NewsArticle;