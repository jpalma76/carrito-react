import React from "react";
import { 
    Card, 
    CardBody, 
    CardImg, 
    CardSubtitle, 
    CardTitle, 
    Col 
} from "reactstrap";

import FichaProducto from './FichaProducto';
import './Producto.css';

class Producto extends React.Component {
    render() {
        return (
            <Col sm="4">
                <Card className="Card" body outline color="primary">
                    <CardImg className="imagen" src={this.props.imagen} alt={this.props.titulo} />
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle>Valor:$ <b>{Intl.NumberFormat("de-DE").format(this.props.precio)}</b> CLP</CardSubtitle>
                        <FichaProducto props={this.props}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Producto;
