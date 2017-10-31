import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import MovieSearchContainer from './containers/search';
import MovieDetailContainer from './containers/detail';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/details/:id' component={ MovieDetailContainer } />
        </div>
      </Router>
    )
  }
}
