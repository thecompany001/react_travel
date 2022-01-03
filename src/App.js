import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <>
    <Router>
    	<NavBar />
      	<Switch>
        	<Route path='/' exact />
      	</Switch>
    </Router>
    </>
  );
}

export default App;