import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = ({setPokemon, evolucoes, pokemon}) => {

    const evoluirPokemon = () => {
    if (evolucoes.length>pokemon.id){
      setPokemon (evolucoes[pokemon.id])
    } 
    else {alert(`${pokemon.name} não tem mais evoluções`)}
    }

  return (
    <Card color={pokemon.color}>
        <img src={pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonType>{pokemon.type}</PokemonType>
        <p>{pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard