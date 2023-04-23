import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { saveReservacion } from "../firebase/api";
import { useState } from "react";
//CSS
import spr from './css/reservar.module.css';
const initialState = {
  Evento: "",
  Fecha: "",
  Hora: "",
  Nombre: "",
  Personas: "",
  Correo: ""
};
const Reservar=()=> {
  const [name, value] = useState(initialState);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValue({...value,[name]:value});
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
  console.log(values)
  };
  return (

    <>
    <form onSubmit={handleSubmit}> 
      <Container fluid>
      <Row className={spr.separacion}>
      <Col md className={spr.sprinput}>
      <FloatingLabel controlId="floatingInputGrid" label="Nombre">
          <Form.Control type="text" placeholder="Nombre" onChange={handleInputChange}/>
        </FloatingLabel>
      </Col>
      <Col md className={spr.sprinput}>
        <FloatingLabel controlId="floatingInputGrid" label="Correo">
          <Form.Control type="email" placeholder="name@example.com" onChange={handleInputChange}/>
        </FloatingLabel>
      </Col>
      <Col md className={spr.sprinput}>
        <FloatingLabel controlId="floatingInputGrid" label="Evento">
          <Form.Control type="text" placeholder="Tipo de evento" onChange={handleInputChange}/>
        </FloatingLabel>
      </Col>
      
    </Row>
    <Row className={spr.separacion}>
      <Col md className={spr.sprinput}>      
        <FloatingLabel controlId="floatingInputGrid" label="Fecha">
          <Form.Control type="date" placeholder="Fecha del evento" onChange={handleInputChange}/>
        </FloatingLabel>
      </Col> 
      <Col md className={spr.sprinput}>      
        <FloatingLabel controlId="floatingInputGrid" label="Hora">
          <Form.Control type="time" placeholder="Hora del evento" onChange={handleInputChange}/>
        </FloatingLabel>
      </Col>  
      <Col md className={spr.sprinput}>
        <FloatingLabel controlId="floatingInputGrid" label="Numero de personas">
          <Form.Control type="number" placeholder="Numero de personas" onChange={handleInputChange}/>
        </FloatingLabel>
      </Col>  
    </Row>
    <Button className={spr.sprinput} variant="outline-primary">Reservar</Button>
    </Container>
    </form>
    
    </>
    
    
  );

};

export default Reservar;