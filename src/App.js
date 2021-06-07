import React,{useEffect} from 'react';
import Cell from './components/Cell';
import Na from './components/Na';
import './App.css';

function App() {
  useEffect(createElement, []);
  async function createElement(){

  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <div id="canvas">
            <div id="cell">
                 <Cell id="topcell" left="45%" top="5%"/>
                 <Na left="38%" top="7%"/>
                 <Cell id="rightcell" left="5%" top="45%"/>
                 <Na left="8%" top="55%"/>
                 <Cell id="bottomcell" right="45%" bottom="5%"/>
                 <Na right="55%" bottom="5%"/>
                 <Cell id="leftcell" right="5%" bottom="50%"/>
                 <Na right="5%" bottom="40%"/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
