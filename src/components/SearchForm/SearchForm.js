import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <form>
                <input
                    type='text'
                    className='search__field'
                    placeholder='Search for news articles here.'
                    name='search' />
                <button className='search__button'>Search Now</button>
            </form>
        )
    }

}

export default SearchForm;