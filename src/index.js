import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MarvelAPI from './DAL/MarvelAPI/MarvelAPI';

const marvelAPI = new MarvelAPI();

marvelAPI.getAllCharcters().then(response => console.log(response))
/*marvelAPI.getCharacter(1009334).then(response => console.log(response)) */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
