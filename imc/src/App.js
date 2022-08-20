import React, { Component, useState } from 'react';
import './App.css';
import Dados from './components/imputs';
import powered from './assets/11.png';



class App extends Component {

  render() {


    return (
      
      <div className='main'>
        <header>
          <div className='headerContainer'>
            <img src={powered} alt="logo" width={150}/>
            developed by @dev.gabriel.amaral
          </div>
        </header>
        <div className='container'>
          <div className='leftSide'>
            <h1>Calcular o IMC</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
          
            <Dados/>
          </div>
          <div className='rightSide'>
            ...
          </div>

        </div>

      </div>
    );
  }
}

export default App;
