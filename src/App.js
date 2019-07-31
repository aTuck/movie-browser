import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import SearchMovies from './components/SearchMovies'
import Directory from './components/Directory'
import About from './components/pages/About'
import Details from './components/pages/Details'
import { Provider } from 'react-redux'
import store from './store'

import './App.css';

class App extends Component {
  componentDidMount(){
    document.title = "Movie Browser"
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              {/* <Header /> */}
              <Route exact path="/" render={ props => (
                <React.Fragment>
                  <SearchMovies />
                  <Directory />
                </React.Fragment>
              )} />
              <Route path="/search" render={ props => (
                <React.Fragment>
                  <SearchMovies />
                  <Directory />
                </React.Fragment>
              )} />
              {/* <Route path="/search" component={About}/> */}
              <Route path="/details" component={Details}/>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
