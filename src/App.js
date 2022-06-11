import './App.scss';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Comics from './components/Comics/Comics';
import CharactersBlock from './components/CharactersBlock/CharactersBlock';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const getSelectedItem = (item) => {
    setSelectedItem(item);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path=""
          element={<CharactersBlock selectedId={selectedItem} getSelectedItem={getSelectedItem} />
          }
        />
        <Route
          path="comics"
          element={<Comics />}
        />
      </Routes>
    </>
  )

}

export default App;
