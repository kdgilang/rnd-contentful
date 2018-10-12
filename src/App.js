import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Route } from 'react-router-dom'
import './bootstrap.css';
import './Font.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Main}></Route>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
