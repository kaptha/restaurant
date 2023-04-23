import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from 'react-router-dom';
//IMG
import logo from "../images/c&c.png";
//CSS
import stiles from "../pages/css/barra.module.css";

export default function Barra(){
    return (
        <>
        <Nav className="justify-content-between barranav" activeKey="/home">
        <Nav.Item>
          <img className={stiles.logo} src={logo}></img>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  as={Link} to="/inicio">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/reservar">Reservar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/menu">
            Menu
          </Nav.Link>
        </Nav.Item>
      </Nav> 
      <section>
            <Outlet></Outlet>
        </section>     
        </>
    )
}