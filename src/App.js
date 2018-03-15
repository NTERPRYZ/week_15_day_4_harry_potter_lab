import React, { Component } from 'react';
import CharacterContainer from './containers/CharacterContainer'


class App extends Component {
  render() {
    const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

    return (
      <CharacterContainer houses={houses}/>
    );
  }
}

export default App;
