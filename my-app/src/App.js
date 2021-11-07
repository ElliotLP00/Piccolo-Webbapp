import React from 'react';
import { Switch, Route } from 'react-router-dom';
/**
 * Import all page components here
 */
import playerListPage from './pages/playerList';
import CategoryPage from './pages/category';
function App() {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={playerListPage}></Route>
      <Route exact path='/category' component={CategoryPage}></Route>
    </Switch>
  );
}

export default App;
