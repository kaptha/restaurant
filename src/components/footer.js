import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//IMG
import fb from "../images/facebook.png";
import twi from "../images/twiter.png";
import ins from "../images/instagram.png";
import tkt from "../images/tik-tok.png";
import logo from "../images/c&c.png"
//CSS
import styles from "../pages/css/footer.module.css";

export default function Footer() {
  return (
    <Container fluid className={styles.foot}>     
      <Row>
        <Col><img className={styles.log} src={logo}></img></Col>
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
        
        <Col >Siguenos
        <ul className="d-flex justify-content-between">
          <li><img className={styles.minlog} src={fb}/></li>
          <li><img className={styles.minlog} src={twi}/></li>
          <li><img className={styles.minlog} src={ins}/></li>
          <li><img className={styles.minlog} src={tkt}/></li>
        </ul>
        </Col>
      </Row>
    </Container>
  );
}
