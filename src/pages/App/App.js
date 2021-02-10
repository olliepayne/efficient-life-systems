import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from '../../components/Navbar/Navbar'

function App() {
 return (
  <div className="App">
   <Navbar />
   <Switch>
    <Route exact path="/signup" />
    <Route path="/" />
   </Switch>
  </div>
 );
}

export default App;
