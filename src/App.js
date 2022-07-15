import './App.scss';
import Header from './components/Header/Header';
import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Common/Loading/Loading';
import AnimatePage from './components/Common/AnimatePage/AnimatePage';

const Comics = lazy(() => import('./components/Comics/Comics'));
const CharactersBlock = lazy(() => import('./components/CharactersBlock/CharactersBlock'));
const ComicsItem = lazy(() => import('./components/Comics/ComicsItem/ComicsItem'));

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const getSelectedItem = (item) => {
    setSelectedItem(item);
  }

  return (
    <AnimatePage>
      <Header />
      <Routes>
        <Route
          path=""
          element={
            <Suspense fallback={<Loading />}>
              <CharactersBlock selectedId={selectedItem} getSelectedItem={getSelectedItem} />
            </Suspense>
          }
        />
        <Route
          path="comics"
          element={
            <Suspense fallback={<><Loading /> Loading...</>}>
              <Comics />
            </Suspense>
          }
        />
        <Route
          path="comics/:id"
          element={
            <Suspense fallback={<>Loading...</>}>
              <ComicsItem />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePage>
  )

}

export default App;
