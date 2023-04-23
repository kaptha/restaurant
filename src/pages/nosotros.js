import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//CSS
import stil from '../pages/css/nosotros.module.css';

export default function Nosotros() {
  return (
    <Container fluid className={stil.imgbck}>
      <Row>
        <Col>
        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i ></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i ></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i ></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
        </Col>
        <Col xs={8}><img className={stil.imgbck2}></img></Col>
      </Row>
    </Container>
  );
}
