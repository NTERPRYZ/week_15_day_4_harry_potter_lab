import React from 'react';
import CharacterList from '../components/CharacterList'

class CharacterContainer extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }


  render() {
    return (
    <div>
      <CharacterList characters={this.state.characters}/>
    </div>

    )
  }

}








export default CharacterContainer
