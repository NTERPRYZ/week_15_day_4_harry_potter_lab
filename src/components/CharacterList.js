import React from 'react'
import Character from './Character'


  const CharacterList = (props) => {
    console.log(props.filteredCharacters);
    if(props.filteredCharacters.length > 0) {
      const characterNodes = props.filteredCharacters.map((character, index) => {
        return(
          <Character
            key  ={index}
            name ={character.name}
            house={character.house}
          />
        );
      })
      return(
        <div>
          {characterNodes}
        </div>)
    } else {
      const characterNodes = props.characters.map((character, index) => {
        return(
          <Character
            key  ={index}
            name ={character.name}
            house={character.house}
          />
        );
      })
      return(
        <div>
          {characterNodes}
        </div>)
    }


  }











export default CharacterList;
