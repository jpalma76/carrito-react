import React from "react";
import {CardSubtitle, CardTitle, CardBody,CardImg, Col, Card, CardText} from 'reactstrap';
import './Producto.css'
import FichaProducto from "./FichaProducto";

class Producto extends React.Component {
    render() {
        return (
            <Col sm="4">
                <Card className="Card">
                    <CardImg src={this.props.imagen} />
                    <CardBody>
                        <CardTitle><b>{this.props.titulo}</b></CardTitle>
                        <CardSubtitle><b>Valor: </b> {this.props.precio}</CardSubtitle>
                        <CardText>
                            {this.props.descripcion}
                        </CardText>
                        <FichaProducto props={this.props} />
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Producto;