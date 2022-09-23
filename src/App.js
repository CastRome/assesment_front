import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/product' element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
