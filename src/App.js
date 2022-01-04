import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <>
    <Router>
    	<Navbar />
      	<Switch>
        	<Route path='/' exact />
      	</Switch>
    </Router>
    </>
  );
}

export default App;
