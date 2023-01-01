import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Demo } from './features/counter/Demo';
import DisplayData from './features/counter/DisplayData';
import DisplayProducts from './DisplayProducts';

function App() {
  return (
    <div className="App">
        <Demo></Demo>
        <hr></hr>
        <DisplayData></DisplayData>
        <hr></hr>
        <DisplayProducts></DisplayProducts>
    </div>
  );
}

export default App;
