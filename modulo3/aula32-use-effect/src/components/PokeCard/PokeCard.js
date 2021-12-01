import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";

export default function PokeCard(props) {

    
    const [pokemonEscolhido, setPokemonEscolhido] = useState({})
   
    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [props.pokemon]) 

    const pegaPokemon = (pokeName) => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemonEscolhido(response.data);
    })
    .catch((err) => {
        console.log(err);
    });
    };
    

    return (
        <div>
            <p>{pokemonEscolhido.name}</p>
            <p>{pokemonEscolhido.weight} Kg</p>
            {pokemonEscolhido.types && <p>{pokemonEscolhido.types[0].type.name}</p>}
            {pokemonEscolhido.sprites && (
                <img src={pokemonEscolhido.sprites.front_default} alt={pokemonEscolhido.name} />
            )}
        </div>
    );
}
