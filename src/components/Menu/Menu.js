import React, { Component }from 'react';
import local from '../../data/local';

import './Menu.css'

class Menu extends Component {
    constructor() {
        super();
        this.state = { local }
    }

    handleNews = (event) => {
        event.preventDefault();
        const newState = [event.target.name]
        this.props.updateState(newState)
    }

    render() {
        return (
            <aside>
                <button className='nav-buttons' name='local' onClick={event => this.handleNews(event)}>Local News</button>
                <button className='nav-buttons' name='health' onClick={event => this.handleNews(event)}>Health</button>
                <button className='nav-buttons' name='entertainment' onClick={event => this.handleNews(event)}>Entertainment</button>
                <button className='nav-buttons' name='science' onClick={event => this.handleNews(event)}>Science</button>
                <button className='nav-buttons' name='technology' onClick={event => this.handleNews(event)}>Technology</button>
            </aside>
        )
    }
}

export default Menu;