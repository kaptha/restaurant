import Nav from 'react-bootstrap/Nav';
//CSS
import "../pages/css/barra.module.css";

export default function Barra(){
    return (
        <>
        <Nav className="justify-content-center barranav" activeKey="/home">
        <Nav.Item>
          <Nav.Link  href="/home">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Reservar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Blog
          </Nav.Link>
        </Nav.Item>
      </Nav>      
        </>
    )
}