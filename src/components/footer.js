import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//IMG
import fb from "../images/facebook.png";
import twi from "../images/twiter.png";
import ins from "../images/instagram.png";
import tkt from "../images/tik-tok.png";
//CSS
import "../pages/css/footer.module.css";

export default function Footer() {
  return (
    <Container className="foot">     
      <Row>
        <Col>Logo</Col>
        <Col>Ligas        
        <ul>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Reservar</li>
          <li>Blog</li>
        </ul>
        </Col>
        <Col>Servicios
        <ul>
          <li>Banquetes</li>
          <li>Cathering</li>
          <li>Envios a todo el pais</li>
          <li>Blog</li>
        </ul>
        </Col>
        <Col>Pedidos
        <ul>
          <li>Rappi</li>
          <li>Didi food</li>
          <li>Uber eats</li>          
        </ul>
        </Col>
        <Col>Siguenos
        <ul>
          <li><img src={fb}/></li>
          <li><img src={twi}/></li>
          <li><img src={ins}/></li>
          <li><img src={tkt}/></li>
        </ul>
        </Col>
      </Row>
    </Container>
  );
}
