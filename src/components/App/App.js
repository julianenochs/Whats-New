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
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentState: local
    }
    console.log('this.state', this.state)
  }

  updateState = (newState) => {
    this.setState({ currentState : [newState] })
  }

  render () {
    console.log('currentState', this.state.currentState)
    return (
      <div className='app'>
        <header>
        <h1>What's <span className='title-change'>New?</span></h1>
        <SearchForm />
        </header>
        <body>
        <nav>
        <Menu updateState={this.updateState}/>
        </nav>
        <main>
        <NewsContainer  news={this.state.currentState} />
        <NewsArticle />
        </main>
        </body>
      </div>
    );
  }
}

export default App;
