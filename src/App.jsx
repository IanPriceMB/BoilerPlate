import React from 'react';
import { Switch, Route } from 'react-router';

/**
 * Base Of the Application
 */
const App = () => {
  function onClick() { console.log('clicked'); };
  return (
  <Switch>
    <Route path="/">
      <div>I am a div!</div>
      <button onClick={onClick}>click me</button>
    </Route>
  </Switch>
)};

export default App