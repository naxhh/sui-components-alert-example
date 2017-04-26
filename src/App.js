import React, { Component } from 'react';
import SuiAlertBasic from '@schibstedspain/sui-alert-basic'
import logo from './logo.svg';
import './App.css';

const IconOk = ({ svgClass }) => <svg className={svgClass} viewBox='0 0 64 64' width='24' height='24'><path fill='none' d='M0,0h24v24H0V0z' /><path d='M32,64A32,32,0,1,1,64,32,32,32,0,0,1,32,64ZM32,4A28,28,0,1,0,60,32,28,28,0,0,0,32,4ZM26,44.83,14.59,33.41a2,2,0,0,1,2.83-2.83L26,39.17,44.59,20.59a2,2,0,0,1,2.83,2.83Z' /></svg>
const IconClose = ({ svgClass }) => <svg className={svgClass} viewBox='0 0 64 64' width='24' height='24'><path d='M60,62a2,2,0,0,1-1.41-.59L32,34.83,5.41,61.41a2,2,0,0,1-2.83-2.83L29.17,32,2.59,5.41A2,2,0,0,1,5.41,2.59L32,29.17,58.59,2.59a2,2,0,0,1,2.83,2.83L34.83,32,61.41,58.59A2,2,0,0,1,60,62Z' /></svg>

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="alerts">
          <SuiAlertBasic type='success' icon={IconOk} iconClose={IconClose}>
            Some content that you want to <strong>alert</strong> about
          </SuiAlertBasic>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
