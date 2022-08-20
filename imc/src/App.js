import React, { Component} from 'react';
import './App.css';
import Dados from './components/imputs';
import powered from './assets/12.jpg';
import {levels} from './helpers/imc.js';
import GridItem from './components/GridItem/GridItem';


class App extends Component {

  render() {


    return (
      
      <div className='main'>
        <header>
          <div className='headerContainer'>
            <img className='logo' src={powered} alt="logo"/>

            <h3 className='title_cred'>developed by @dev.gabriel.amaral</h3>
          </div>
        </header>
        <div className='container'>
          <div className='leftSide'>
            <h1>Calcular o IMC</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
          
            <Dados/>
          </div>
          <div className='rightSide'>
            <div className='grid'>
              {levels.map((item, key)=>(
                // <div key={key}>{item.title}</div>
                <GridItem key={key} imc={item.imc} item={item.color} icon={item.icon} title={item.title}/>
              ))}
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
