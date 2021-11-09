import React from 'react';
import { Route, Routes } from 'react-router';
/**
 * Import all page components here
 */
import PlayerListPage from './pages/playerList';
import CategoryPage from './pages/category';
function App() {
  return (
    <Routes>
      <Route path="/" element={<PlayerListPage/>}/>
      <Route path="invoices" element={<CategoryPage />}/>
    </Routes>
    
  );
}

export default App;
