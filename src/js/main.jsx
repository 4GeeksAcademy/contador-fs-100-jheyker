import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let counter = 0

const root = ReactDOM.createRoot(document.getElementById('root'))

setInterval(() => {
  const digitOne = Math.floor(counter/ 100000) % 10
  const digitDos = Math.floor(counter/ 10000) % 10
  const digitTres = Math.floor(counter/ 1000) % 10
  const digitCuatro = Math.floor(counter/ 100) % 10
  const digitCinco = Math.floor(counter/ 10) % 10
  const digitSeis = Math.floor(counter) % 10
  root.render( 
    <Home  digitOne={digitOne} digitDos={digitDos} digitTres={digitTres} digitCuatro={digitCuatro} digitCinco={digitCinco} digitSeis={digitSeis} />);
  counter++;
}, 1000);
