import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';


function App() {
  return (
    <>
    <Router>
    	<Navbar />
      	<Switch>
        	<Route path='/' exact component={Home} />
      	</Switch>
    </Router>
    </>
  );
}

export default App;
