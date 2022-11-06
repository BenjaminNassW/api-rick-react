import './App.css';
import Grid from './components/grid';
import React, {useEffect} from 'react';

function App() {

  
  
  return (
    <div className="App">
      
      <div className="d-flex" >
        <h1 id='marco' className='border border-dark'></h1><h1 className='border border-dark' id='marco'>A</h1><h1 className='border border-dark' id='marco'>B</h1><h1 className='border border-dark' id='marco'>C</h1><h1 className='border border-dark' id='marco'>D</h1><h1 className='border border-dark' id='marco'>E</h1><h1 className='border border-dark' id='marco'>F</h1><h1 className='border border-dark' id='marco'>G</h1><h1 className='border border-dark' id='marco'>H</h1><h1 className='border border-dark' id='marco'>I</h1><h1 className='border border-dark' id='marco'>J</h1>
      </div>
        <>
        <div id='columna' >
        <div id="numeros"className='border border-dark'><h1>1</h1></div>
        <div id="numeros"className='border border-dark'><h1>2</h1></div>
        <div id="numeros"className='border border-dark'><h1>3</h1></div>
        <div id="numeros"className='border border-dark'><h1>4</h1></div>
        <div id="numeros"className='border border-dark'><h1>5</h1></div>
        <div id="numeros"className='border border-dark'><h1>6</h1></div>
        <div id="numeros"className='border border-dark'><h1>7</h1></div>
        <div id="numeros"className='border border-dark'><h1>8</h1></div>
        <div id="numeros"className='border border-dark'><h1>9</h1></div>
        <div id="numeros"className='border border-dark'><h1>10</h1></div>
        
        </div>
        <div className='d-flex flex-wrap' id="grid">
          <Grid/>
        </div>
        </>

     
    </div>
  );
}

export default App;
