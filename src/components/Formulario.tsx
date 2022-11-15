import {Button, Form, Row, Col} from 'react-bootstrap'
const Formulario = () => {
  return (
    <Form>
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='nombre'>Nombre Cupon</Form.Label>

                    <Form.Control
                        id="nombre"
                        type="text"
                        placeholder='Ej: Restaurante, Gimnasio, Farmacia'
                        name="nombre"
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3">
                    <Form.Label htmlFor='nombre'>Categoria</Form.Label>
                    <Form.Select>
                        <option>- Selecciona una Categoria -</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario