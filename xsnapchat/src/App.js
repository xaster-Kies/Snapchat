
import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <WebcamCapture/>

      <Router>
      <div className="app__body">
        <Switch>
        <Route exact path="/preview">
            <Preview/>
          </Route>
          <Route exact path="/">
            <WebcamCapture/>
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
