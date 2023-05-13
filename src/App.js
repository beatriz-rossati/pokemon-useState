import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  

  const [pichu, setPichu]= useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/f/f3/0172Pichu.png/250px-0172Pichu.png',
    id: 0
  })

  const evolucoesPichu = [{
    ...pichu,
     name: "Pikachu",
      weight: 6,
      image: "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/250px-0025Pikachu.png",
      id:1
    }, 
    {
      ...pichu,
        name: "Raichu",
        weight: 30,
        image: "https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/250px-0026Raichu.png",
        id:2
      },
    ]
  

  return ( <>
  <GlobalStyles/>
    <FlexContainer>

      <PokemonCard 
      pokemon = {pichu}
      setPokemon = {setPichu}
      evolucoes = {evolucoesPichu}
      />
 
    </FlexContainer>
  </>
    
  );
}

export default App;
