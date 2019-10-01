import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    return(
        <article className='news-article'>
            <img src={props.img} alt={props.headline}/>
            <h2>{props.headline}</h2>
            <p>{props.description}</p>
            <a href={props.url} className='article-link'>Link To Article</a>
        </article>
    )
}

export default NewsArticle;