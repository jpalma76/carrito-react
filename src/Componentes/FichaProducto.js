/* renderizado de los productos en los modales */
import React from "react";
import { 
    Modal,
    Button, 
    Container, 
    ModalFooter, 
    ModalBody, 
    ModalHeader, 
    CardImg 
} from 'reactstrap';

import './FichaProducto.css';

class FichaProducto extends React.Component {
    constructor(props) {
        super();
        this.state = {
            modal:false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
        <Container>
            <Button onClick={this.toggle}>Ver ficha</Button>
            <Modal isOpen={this.state.modal}>
                <ModalHeader>{this.props.props.titulo}</ModalHeader>
                <ModalBody>
                    <CardImg src={this.props.props.imagen} />
                    <p>El detalle del producto seleccionado es el siguiente:</p>
                    {this.props.props.descripcion}
                    <p>Este producto tiene un valor de <b>$ {this.props.props.precio}</b></p>
                    <p>Hay <b>{this.props.props.stock}</b> unidades de este producto</p>
                </ModalBody>
                <ModalFooter className="ModalFooter">
                    <Button color="primary" onClick={this.toggle}>Agregar al carrito</Button>
                    <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                </ModalFooter>
            </Modal>
        </Container>
        );
    }
}
export default FichaProducto;