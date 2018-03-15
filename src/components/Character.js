import React from 'react'


  const Character = (props) => {
    return (
      <div className="character-detail">
        <h2>{props.name}</h2>
        <p>{props.house}</p>
        <img src={props.image}/>
      </div>
    )
  }











export default Character;
