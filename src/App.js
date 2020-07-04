import React from 'react';
import './App.css';
import Header from './header.js'
import Filter from './filter.js'
import Listings from './listings.js'

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <Listings />
    </div>
  );
}

export default App;
