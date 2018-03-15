import React from 'react';
import CharacterList from '../components/CharacterList'
import Title from "../components/Title"

class CharacterContainer extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filteredCharacters: []
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
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

  handleSelectChange(house){
    const filteredCharacters =  this.state.characters.filter(character => {
      return house === character.house;
    })
    this.setState({filteredCharacters: filteredCharacters})
  }


  render() {
    return (
    <div>
      <Title handleSelectChange={this.handleSelectChange} houses={this.props.houses}/>
      <CharacterList characters={this.state.characters} filteredCharacters={this.state.filteredCharacters}/>
    </div>

    )
  }

}








export default CharacterContainer
