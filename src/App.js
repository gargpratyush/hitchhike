import React, { useState, useRef } from 'react';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';
import EventsPage from './components/EventsPage/EventsPage';



function App() {

  const [city, setCity] = useState();

  return (
    <div className="App">
      <Router>
       <Switch>
        <Route exact path="/">
          <LandingPage setCity={setCity}/>
        </Route>
        <Route exact path="/eventspage">
          <EventsPage city={city}/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
