import React from 'react';
import './styles/App.css';
import Header from './components/header.js'
import Filter from './components/filter.js'
import Listings from './components/listings.js'


function App() {
  return (
    <div>
      <Header/>
      <Filter/>
    </div>
  );
}

export default App;
