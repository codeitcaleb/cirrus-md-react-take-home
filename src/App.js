import React, { useState, useEffect } from 'react';
import ResponsiveLayout from './features/ResponsiveLayout/ResponsiveLayout'

import './App.css';

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=898";

function App() {
  const [pokemon, setPokemon] = useState([]);
  

  useEffect(() => {
    fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('Something went wrong while requesting Pokemon')
    })
    .then((data) => setPokemon(data.results))
    .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <div className="header nes-container">
        <h1 className="title">Pokémon</h1>
      </div>
    
      {
        pokemon.length > 0 ? (
          <ResponsiveLayout 
            data={pokemon}
          />
         ) : <div>No Pokemon Available</div>
      } 
    </div>
  );
}

export default App;
