import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import { BrowserRouter, Route } from 'react-router-dom'
import './bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header-wrapper">
            <Header />
          </div>
          <Route path="/" component={Main}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
