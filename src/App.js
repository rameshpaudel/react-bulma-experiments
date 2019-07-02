import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './container/HomePage'
import AboutPage from './container/AboutPage'
import { NavBar } from './components/index'
import 'bulma/css/bulma.min.css'

function App() {
  return (
    <Router>
      <NavBar/>
      <Route path="/" exact component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
    </Router>
  );
}

export default App;
