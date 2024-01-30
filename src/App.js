import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Producto from './Componentes/Producto'
import { Container, Row } from 'reactstrap';
import Navegacion from './Componentes/Navegacion';
import listaProductos from "./listaProductos.json";
console.log();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listaProductos
    }
  }

  render() {
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        return(
          <Producto 
            key={i}
            titulo = {listaProductos.titulo}
            imagen = {listaProductos.imagen}
            descripcion = {listaProductos.descripcion}
            precio = {listaProductos.precio.replace(".", "")}
            stock = {listaProductos.stock}
          />
        );
      }
    );

    return (
      <Container>
        <Navegacion titulo="Mi primer sitio de compras en React"/>
        <Row>
          {arregloComponentes}
        </Row>
      </Container>
    );
  }
}

export default App;
