import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/details/:postId">
        <PostDetails></PostDetails>
      </Route>
      <Route path="*">
        <NoMatch/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
