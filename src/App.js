import { BrowserRouter, Route, Routes} from "react-router-dom";
import Barra from './components/barra';
import Inicio from './components/inicio';
import Footer from './components/footer';
import Nosotros from './pages/nosotros';
import Reservar from './pages/reservar';
import Menu from './pages/menu';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Barra/> }>
        <Route path='inicio' element={ <Inicio/> }/>
        <Route path='nosotros' element={ <Nosotros/> }/>
        <Route path='reservar' element={ <Reservar/> }/>
        <Route path='menu' element={ <Menu/> }/>        
        </Route>
      </Routes>
    </BrowserRouter> 
      
      <Footer/>
    </>
  );
}

export default App;
