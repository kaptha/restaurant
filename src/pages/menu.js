import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { getMenu } from "../firebase/apimenu";

function Menu() {
  const [values, setValues] = useState([]);
  
  const gMenu = async () => {
    const querySnapshot = await getMenu();     
    const keys = Object.values(querySnapshot);    
    const docs = [];    
   
    console.log(keys);   
    keys.forEach((doc) => {   
      docs.push({ ...doc})
    });    
    setValues(docs); 
  };
  useEffect(() => {
    gMenu();
  }, []);
  //gMenu();
  return (
    <>
    <Container fluid>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>          
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {values.map((data)=>(
        <tr>          
        <td>{data.Nombre}</td>
        <td>{data.Descripcion}</td>
        <td>{data.Precio}</td>
        </tr>))}
      </tbody>
      </Table>
    </Container>
    </>
    
  );
}

export default Menu;