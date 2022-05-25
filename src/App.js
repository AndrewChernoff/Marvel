import './App.scss';
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header';
import RandomCharacter from './components/RandomChar/RandomChar';
import CharacterItem from './components/CharacterItem/CharacterItem';
import React from 'react';
import NotSelected from './components/NotSelected/NotSelected';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary ';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    }
  }
  getSelectedItem = (item) => {
    this.setState({
      selectedItem: item
    })
  }

  render() {
    return (
      <>
        <Header />
        <RandomCharacter />
        <div className='charactersBlock'>
          <div className='container'>
            <div className='charactersBlock__content'>
              <ErrorBoundary>
                <Characters getSelectedItem={this.getSelectedItem} selectedId={this.state.selectedItem} />
              </ErrorBoundary>
              {!this.state.selectedItem ? <NotSelected /> :
                <ErrorBoundary>
                  <CharacterItem selectedId={this.state.selectedItem} />
                </ErrorBoundary>}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;
