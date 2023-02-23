import React from 'react';
import apiObjects from '../api/apiData';
import Pokemon from './Pokemon';


const Pokedex = (props) => {
    const apiPokemon = `/pokemon?offset=${props.next}&limit=20`

    const data = apiObjects.usePokemons(apiPokemon);
    const pokemons = data.results;
    // console.log(pokemons);

    return (
        <>
            <section className='App-main'>
                {pokemons?.map((pokemon) => {
                    return (
                        <Pokemon
                            key={pokemon.name}
                            url={pokemon.url}
                            name={pokemon.name}
                        />
                    )
                })}
            </section>
        </>
    )
}

export default Pokedex
