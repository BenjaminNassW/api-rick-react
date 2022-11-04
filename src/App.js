import './App.css';
import Grid from './components/grid';

function App() {

 
  return (
    <div className="App">
      
      <div className="d-flex" >
        <h1 id='marco'>A</h1><h1 id='marco'>B</h1><h1 id='marco'>C</h1><h1 id='marco'>D</h1><h1 id='marco'>E</h1><h1 id='marco'>F</h1><h1 id='marco'>G</h1><h1 id='marco'>H</h1><h1 id='marco'>I</h1><h1 id='marco'>J</h1>
      </div>
        <div className='d-flex flex-wrap'>
          <Grid/>

        </div>
      
    </div>
  );
}

export default App;
