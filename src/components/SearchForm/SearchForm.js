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
                    className='search-field'
                    placeholder='Search for news articles here.'
                    name='search' />
                <button>Search Now</button>
            </form>
        )
    }

}

export default SearchForm;