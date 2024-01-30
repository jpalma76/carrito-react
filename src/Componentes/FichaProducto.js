import React from "react";
import { Button, CardImg, Container, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import './FichaProducto.css';
import listaCarrito from '../listaCarrito.json'

class FichaProducto extends React.Component {
    constructor(props) {
        super();
        this.state = {
            modal: false,
            listaCarrito,
            stock: props.props.stock
        }

        this.toggle = this.toggle.bind(this)
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    agregarCarrito() {
        if(this.state.stock !== 0) {
            listaCarrito.push({
                "titulo": this.props.props.titulo,
                "precio": this.props.props.precio
            });
            this.setState(prevState => ({
                modal: !prevState.modal,
            }))
        }
        
        if(this.state.stock !== 0) {
            this.setState(prevState => ({
                stock: prevState.stock - 1
            }))
        } else {
            alert("Stock agotado");
            this.toggle();
        }

        const badge = document.getElementById('Badge1');
        badge.innerText = listaCarrito.length;
    }

    render() {
        return(
            <Container>
                <Button onClick={this.toggle}>Ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>El detalle del producto seleccionado es el siguiente:</p>
                        {this.props.props.detalle}
                        <p>Este producto tiene un valor de $ <b>{this.props.props.precio} CLP</b></p>
                        <p>Hay <b>{this.state.stock}</b> unidades de este producto disponibles.</p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button onClick={this.agregarCarrito} color="primary">Agregar al carrito</Button>
                        <Button onClick={this.toggle} color="secondary">Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;