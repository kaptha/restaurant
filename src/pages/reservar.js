import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
//CSS
import spr from './css/reservar.module.css';
function Reservar() {
  return (
    <>
    <Container fluid>
      <Row className={spr.separacion}>
      <Col md className={spr.sprinput}>
      <FloatingLabel controlId="floatingInputGrid" label="Nombre">
          <Form.Control type="text" placeholder="Nombre" />
        </FloatingLabel>
      </Col>
      <Col md className={spr.sprinput}>
        <FloatingLabel controlId="floatingInputGrid" label="Correo">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
      <Col md className={spr.sprinput}>
        <FloatingLabel controlId="floatingInputGrid" label="Evento">
          <Form.Control type="text" placeholder="Tipo de evento" />
        </FloatingLabel>
      </Col>
      
    </Row>
    <Row className={spr.separacion}>
      <Col md className={spr.sprinput}>      
        <FloatingLabel controlId="floatingInputGrid" label="Fecha">
          <Form.Control type="date" placeholder="Fecha del evento" />
        </FloatingLabel>
      </Col> 
      <Col md className={spr.sprinput}>      
        <FloatingLabel controlId="floatingInputGrid" label="Hora">
          <Form.Control type="time" placeholder="Hora del evento" />
        </FloatingLabel>
      </Col>  
      <Col md className={spr.sprinput}>
        <FloatingLabel controlId="floatingInputGrid" label="Numero de personas">
          <Form.Control type="number" placeholder="Numero de personas" />
        </FloatingLabel>
      </Col>  
    </Row>
    <Button className={spr.sprinput} variant="outline-primary">Reservar</Button>
    </Container>
    </>
    
    
  );
}

export default Reservar;