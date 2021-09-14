import React, { useEffect, useState } from 'react';
import { fetchPokemon } from './utils';
import { Pokemon } from './types';

//import InfoContainer from './components/InfoContainer';
//import PokemonName from './components/PokemonName';
//import Abilities from './components/Abilities';
import Card from './components/Card';


import './app.css';

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetchPokemon('bulbasaur').then((res) => setPokemon(res));
  }, []);

  return (
    <div className='appRoot'>
      <Card pokemon={pokemon}/>
    </div>
  );
};

export default App;
