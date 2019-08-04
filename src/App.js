import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect,
  // Link,
  // withRouter,
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Details from './components/pages/Details'
import Directory from './components/Directory'
import Search from './components/pages/Search'
import { Provider } from 'react-redux'
import store from './store'

import './App.css';
import SearchMovies from './components/SearchMovies';

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
              <Switch>
                <Route exact path="/" render={ () => (
                  <Redirect to="search?title="/>
                )}/>
                <Route path="/search" component={Search}/>
                <Route path="/details/:id" component={Details}/>
                <Route component={ () => <h1>error 404</h1> }/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
