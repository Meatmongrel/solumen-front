import React from 'react';
import './App.css';
import StartButton from './components/StartButton';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/"  render={(props) => <StartButton {...props}/>}/>
        <Route path="/landingpage/"  component={LandingPage}/>
        

        </Switch>
      </Router>
    </div>
  );
}

export default App
