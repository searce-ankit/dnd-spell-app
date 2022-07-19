import React from 'react';
import { SpellList } from './components/spell/SpellList';
import { FavouriteSpellList } from './components/spell/FavouriteSpellList';
import { SpellDetail } from './components/spell/SpellDetail';
import { Header } from './components/common/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path='/' element={ <SpellList /> } />
        <Route path='/favourite' element={ <FavouriteSpellList /> } />
        <Route path='/spell/:index' element={ <SpellDetail /> } />
      </Routes>
    </Router>
  );
}

export default App;
