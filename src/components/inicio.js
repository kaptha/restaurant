import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//Imagenes
import slideuno from "../images/cerveza.jpg";
import slidedos from "../images/carne1.jpg";
import slidetres from "../images/carne2.jpg";
import cerv from "../images/barril.png";
import carn from "../images/meat.png";
import nosotros from "../images/nos.jpg";
import servs from "../images/servs.jpg";
//CSS
import stilos from "../pages/css/inicio.module.css";


export default function Inicio() {
  return (
    <>
    <Container >      
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={slidedos}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cortes Finos</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={slideuno}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cervezas Artesanales</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={slidetres}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Cortes Premium</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>     
    </Container>
    <Container className={stilos.segundoblok}>    
    <Row> 
      <Col className="align-self-center">
      <div>
        <img className={stilos.icopre} src={cerv}/>        
      </div>
      Cerveza Artesanal
      </Col>
      <Col>
      Que hacemos
      <h5>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y 
        los mezcló de tal manera que logró hacer un libro de textos especimen. </h5>
      </Col>
      <Col className="align-self-center">
      <div>
        <img  className={stilos.icopre} src={carn}/>        
      </div>
      Cortes Finos
      </Col>
    </Row>
  </Container>
  <Container>
      <Row>
        <Col><img className={stilos.us} src={nosotros}/></Col>
        <Col>nosotros
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </p>
        </Col>
      </Row>      
    </Container>
    <Container>
      <Row>
        <Col>Servicios
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero</p>
        </Col>
        <Col><img className={stilos.us} src={servs}/></Col>
      </Row>      
    </Container>
    <Container className="d-flex justify-content-around">
      <Row>
        <Col>Haz una reservacion
        <Button className={stilos.redondo} variant="outline-primary">Agendar</Button>
        </Col>        
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

