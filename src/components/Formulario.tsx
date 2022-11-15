import {Button, Form, Row, Col} from 'react-bootstrap'
const Formulario = () => {
  return (
    <Form>
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre Cupon</Form.Label>

                    <Form.Control
                        type="text"
                        placeholder='Ej: Restaurante, Gimnasio, Farmacia'
                        name="nombre"
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                2
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario