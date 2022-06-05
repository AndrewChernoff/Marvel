import './App.scss';
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header';
import RandomCharacter from './components/RandomChar/RandomChar';
import CharacterItem from './components/CharacterItem/CharacterItem';
import React, { useState } from 'react';
import NotSelected from './components/NotSelected/NotSelected';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary ';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const getSelectedItem = (item) => {
    setSelectedItem(item);
  }

  return (
    <>
      <Header />
      <RandomCharacter />
      <div className='charactersBlock'>
        <div className='container'>
          <div className='charactersBlock__content'>
            <ErrorBoundary>
              <Characters getSelectedItem={getSelectedItem} selectedId={selectedItem} />
            </ErrorBoundary>
            {!selectedItem ? <NotSelected /> :
              <ErrorBoundary>
                <CharacterItem selectedId={selectedItem} />
              </ErrorBoundary>}
          </div>
        </div>
      </div>
    </>
  )

}

export default App;
