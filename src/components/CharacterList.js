import React from 'react'
import Character from './Character'


  const CharacterList = (props) => {

    const characterNodes = props.characters.map((character, index) => {
      return(
        <Character
          key={index}
          name={character.name}
          house={character.house}
        />
      );
    })

    return(
      <div>
        {characterNodes}
      </div>
    )


  }











export default CharacterList;
