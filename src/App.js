import React, { useState, useEffect } from 'react';
import Pagination from './features/Pagination.js'
import Pokemon from './components/Pokemon.js'
import './App.css';

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=898";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('Something went wrong while requesting Pokemon')
    })
    .then((data) => setPokemon(data.results))
    .catch((error) => setError(error));
  }, [])

  return (
    <div className="App">
      <div className="header nes-container">
        <h1 className="title">Pokémon</h1>
      </div>
      {
        pokemon.length > 0 ? (
         <Pagination 
           data={pokemon}
           RenderComponent={Pokemon}
           title="Pokémon"
           dataLimit={9}
         />
         ) : <div>No Pokemon Available</div>
      } 
    </div>
  );
}

export default App;
