import './App.css';
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';
import { BrowserRouter , Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
   
            <Route exact path='/create' element={<Create/>} />
            <Route exact path='/read' element={<Read/>} />
            <Route exact path='/update' element={<Update/>} />

        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;