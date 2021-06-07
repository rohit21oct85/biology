import React,{useEffect} from 'react';
import './App.css';
import CharecterState from './pages/CharecterState'
import CellPage from './pages/CellPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <div className="row col-md-12">
            <div className="col-md-3">
                <CharecterState />
            </div>
            
            <div className="col-md-9">
                <CellPage />
            </div>
          </div>

        </div>
      </header>
    </div>
    
    </>
  );
}

export default App;
