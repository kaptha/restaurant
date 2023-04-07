import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../pages/css/inicio.css";

export default function Inicio() {
  return (
    <>
    <Container className="slide">      
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../images/carne1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../images/cerveza.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../images/carne2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>     
    </Container>
    <Container className="presentacion">    
    <Row>
      <Col>
      <div>
        <img src="../images/cerv1.jpg">
        </img>
      </div>
      Cerveza Artesanal
      </Col>
      <Col>
      Que hacemos
      </Col>
      <Col>
      <div>
        <img src="../images/carn1.jpg">
        </img>
      </div>
      Cortes Finos
      </Col>
    </Row>
  </Container>
  <Container>
      <Row>
        <Col>Nosotros</Col>
        <Col>Descripcion</Col>
      </Row>      
    </Container>
    <Container>
      <Row>
        <Col>Descripcion</Col>
        <Col>Servicios</Col>
      </Row>      
    </Container>
    <Container>
      <Row>
        <Col>Haz una reservacion</Col>        
      </Row>      
    </Container>
    <Container>
      <Row>
        <Col>Ubicanos</Col>
        <Col>Mapa</Col>
      </Row>      
    </Container>
    </>
    
    
  );
}

