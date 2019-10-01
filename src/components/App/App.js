import React, { Component } from 'react';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  updateState = (newState) => {
    this.setState({ [newState]: [newState] })
  }

  render () {
    return (
      <div className='app'>
        <Menu />
        <NewsContainer  news={this.state.local} />
        <NewsArticle />
      </div>
    );
  }
}

export default App;
