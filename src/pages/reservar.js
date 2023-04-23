import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Reservar() {
  return (
    <Container>
      <Row className="g-2">
      <Col md>
      <FloatingLabel controlId="floatingInputGrid" label="Nombre">
          <Form.Control type="text" placeholder="Nombre" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Correo">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Evento">
          <Form.Control type="text" placeholder="Tipo de evento" />
        </FloatingLabel>
      </Col>
      
    </Row>
    <Row>
      <Col md>      
        <FloatingLabel controlId="floatingInputGrid" label="Fecha">
          <Form.Control type="date" placeholder="Fecha del evento" />
        </FloatingLabel>
      </Col> 
      <Col md>      
        <FloatingLabel controlId="floatingInputGrid" label="Hora">
          <Form.Control type="time" placeholder="Hora del evento" />
        </FloatingLabel>
      </Col>  
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Numero de personas">
          <Form.Control type="number" placeholder="Numero de personas" />
        </FloatingLabel>
      </Col>  
    </Row>
    <Button variant="outline-primary">Reservar</Button>
    </Container>
    
  );
}

export default Reservar;