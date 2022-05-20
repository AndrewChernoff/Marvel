import './App.scss';
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header';
import RandomCharacter from './components/RandomChar/RandomChar';
import CharacterItem from './components/CharacterItem/CharacterItem';
import React from 'react';
import NotSelected from './components/NotSelected/NotSelected';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      selectedItem: null
    }
  }
  getSelectedItem = (item) => {
    this.setState({
      selectedItem: item
    })
  }

  /* selectedItem = () => {
    if (!this.state.selectedItem) {
      return;
    }
    else {
      return this.state.characters.filter(item => item.id === this.state.selectedItem);
    }
  } */

  getCharacters = (chars) => {
    this.setState({ characters: chars })
  }

  render() {
    //let item = this.selectedItem()
    return (
      <>
        <Header />
        <RandomCharacter />
        <div className='charactersBlock'>
          <div className='container'>
            <div className='charactersBlock__content'>
              <Characters getCharacters={this.getCharacters} getSelectedItem={this.getSelectedItem} />
              {!this.state.selectedItem ? <NotSelected /> : <CharacterItem selectedId={this.state.selectedItem} />}{/* ///////////////// */}
            </div>
            <button>LOAD MORE</button>
          </div>
        </div>
      </>
    )
  }
}

export default App;
