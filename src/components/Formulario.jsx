import {useState} from 'react';
import {Button, Form, Row, Col, Alert} from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias';

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    });
    const [alerta, setAlerta]=useState('');
    const {categorias} = useCategorias();

    const handleSubmit = e=>{
        e.preventDefault();
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios');
            return 
        }
    }

  return (
    <Form
        onSubmit={handleSubmit}
    >
        {alerta && <Alert>{alerta}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='nombre'>Nombre Cupon</Form.Label>

                    <Form.Control
                        id="nombre"
                        type="text"
                        placeholder='Ej: Restaurante, Gimnasio, Farmacia'
                        name="nombre"
                        value={busqueda.nombre}
                        onChange={e=>setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })}
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3">
                    <Form.Label htmlFor='categoria'>Categoria</Form.Label>
                    <Form.Select
                        id="categoria"
                        name="categoria"
                        value={busqueda.categoria}
                        onChange={e=>setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })}
                    >
                        <option>- Selecciona una Categoria -</option>
                        {categorias.map(categoria=>(
                            <option
                                key={categoria.key}
                                value={categoria.categoria}
                            >{categoria.categoria}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className='justify-content-end'>
            <Col md={3}>
                <Button
                    className='text-uppercase w-100'
                    type="submit"
                >
                    Buscar Cupones
                </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario