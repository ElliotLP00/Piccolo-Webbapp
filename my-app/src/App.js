import React from 'react';
import { Route, Routes} from 'react-router';
/**
 * Import all page components here
 */
import CategoryPage from './pages/HomePage/home_copy';
import GamePage from './pages/GamePage/game_copy'
function App() {
  return (
    <Routes >
        <Route exact path="/" element={<CategoryPage />}/>
        <Route path="/game" element={<GamePage />}/>
    </Routes>
    
  );
}

export default App;
