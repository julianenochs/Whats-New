import React, { Component } from 'react';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import NewsContainer from '../NewsContainer/NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      health,
      entertainment,
      science,
      technology,
      currentState: local
    }
  }

  updateState = (newState) => {
    console.log('new state', newState)
    this.setState({ currentState : [newState][0] })
  }

  render () {
    console.log('current state', this.state.currentState)
    return (
      <div className='app'>
        <header>
        <h1>What's <span className='title-change'>New?</span></h1>
        <SearchForm />
        </header>
        <div className='body'>
        <nav>
        <Menu updateState={this.updateState} />
        </nav>
        <main>
        <NewsContainer news={this.state.currentState} />
        </main>
        </div>
      </div>
    );
  }
}

export default App;
