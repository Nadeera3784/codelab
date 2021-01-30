import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './styles/bootstrap.css';
import './styles/app.css';
import store from './store.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Category from './components/Category.js';
import NotFound from './components/NotFound.js';


class App extends Component{
  render() {
    return (
      <Provider store={store}>
          <Router>
            <div className="App">
              <div className="container">
                  <Header/> 
                      <Switch>
                        <Route exact  path="/" component={Home}/>
                        <Route exact  path="/category/:slug" component={Category}/>
                      </Switch>
                  <Footer/>
              </div>
            </div>
          </Router> 
      </Provider>
    );
  }
}

export default App;
