import React from 'react';
import CharacterList from '../components/CharacterList'

class CharacterContainer extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if(request.status !==200) return;
      const jsonString = request.responseText;
      const characterObjects = JSON.parse(jsonString);
      this.setState({characters: characterObjects});
    });
    request.send();
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
