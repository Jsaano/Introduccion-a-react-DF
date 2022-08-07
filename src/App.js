import React from 'react';
import './App.css';
import Titulo from './components/Header';
import Card from './components/Card';
import Foooter from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App()
{
  return (
  <div>
    <Titulo/>
    <Card/>
    <Foooter/>
    <button>Boton de bootstrap</button>
  </div>
  )
  }
  


export default App;
