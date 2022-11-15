import React from 'react'
import {Col, Card, Button} from 'react-bootstrap'

const Cupon = ({cupon}) => {
    console.log("CONTENIDO CUPON",cupon);
  return (
    <Col md={6} lg={4}>
        <Card className='mb-4'>
            <Card.Img
                variant='top'
                src={cupon.logo}
                alt={`Imagen de ${cupon.titulo}`}
            />
            <Card.Body>
                <Card.Title>{cupon.titulo}</Card.Title>
                <Card.Text>{cupon.descripcion}</Card.Text>
                <Button className="w-100 text-uppercase mt-2">
                    Ver Cupon
                </Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Cupon